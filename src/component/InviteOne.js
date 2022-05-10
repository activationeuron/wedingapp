import React, { useEffect, useMemo, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useRoutes } from 'react-router-dom';
import styledComponents from 'styled-components';
import CheckItem from '../CheckBox';
import request from '../utils/request';
import { Table } from './Table';

function InviteOne() {
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [events, setEvents] = useState([]);
  const [all, setAll] = useState([]);
  const [show, setShow] = useState(false);
  const [party, setParty] = useState(0);
  const [products, setProducts] = useState([
    { name: 'HALDI', checked: false, count: 0 },
    { name: 'SANGEET', checked: false, count: 0 },
    { name: 'WEDDING', checked: false, count: 0 },
    { name: 'RECEPTIONS', checked: false, count: 0 },
  ]);
  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState([]);
  const handleChangeCheck = (name) => {
    const copyProducts = [...products];
    const modifiedProducts = copyProducts.map((product) => {
      if (name === product.name) {
        product.checked = !product.checked;
      }

      return product;
    });

    setProducts(modifiedProducts);
  };

  //   const handleChange = (e) => {
  //     let value = Array.from(e.target.selectedOptions, (option) => option.value);
  //     console.log(value);
  //   };

  // const handleChange = (e) => {
  //   let target = e.target;
  //   //here
  //   let value = Array.from(target.selectedOptions, (option) => option.value);
  //   setEvents(value);
  //   console.log(value);
  //   // setEvents(value);
  // };

  const createInvite = async (e) => {
    e.preventDefault();


  
    try {
      const response = await request.post('/event/create', {
        name,
        phone,
        events: products.map((product) => {
          return {
            name: product.name,
            count: product.count,
            checked: product.checked,
          };
        }),
        limit: 12,
      });
      if (response.data.success) {
        alert('INVITATION SUCCESS');
        setShow(false);
        getAllIncitations();
      }
    } catch (error) {
      console.log(error.message);
      alert('INVITATION FAILED');
    }

    setProducts([
      { name: 'HALDI', checked: false, count: 0 },
      { name: 'SANGEET', checked: false, count: 0 },
      { name: 'WEDDING', checked: false, count: 0 },
      { name: 'RECEPTIONS', checked: false, count: 0 },
    ]);
  };

  const getAllIncitations = async () => {
    const alldata = await request.get('/event/all');
    if (alldata.data.success) {
      setAll(alldata.data.data);
    }
  };

  useEffect(() => {
    getAllIncitations();
  }, []);

  const deleteEntry = async (data) => {
    console.log(data, 'daa');
    const deleted = await request.delete(`/event/${data}`);
    getAllIncitations();
  };

  const [tab, setTab] = useState(1);
  const tabIndex = (p) => {
    setTab(p);
  };

  const [rsvpList, setRsvpList] = useState([]);

  const getRsvp = async () => {
    const response = await request.get('/event/rsvp');
    console.log(response.data.data);
    if (response.data.success) {
      setRsvpList(response.data.data);
      setFilterList(response.data.data);
    }
  };
  useEffect(() => {
    getRsvp();
  }, []);

  useEffect(() => {
    if (filter !== 'ALL') {
      const aa = rsvpList.filter((rsvp) => {
        if (rsvp.events) {
          return rsvp.events.includes(filter);
        }
      });
      setFilterList(aa);
    } else {
      getRsvp();
    }
  }, [filter]);

  const handleCount = (count) => {
    console.log(count);
    const newp = products.map((el) =>
      el.name === count.name ? Object.assign({}, count) : el
    );
    setProducts(newp);
    console.log(newp);
  };

  return (
    <div>
      <div className='flex flex-col items-center px-10 md:w-1/2 mx-auto space-y-5 relative h-screen'>
        <div className='text-center text-2xl uppercase'>Create Invitations</div>
        <div
          className='px-2 py-2 bg-slate-800 text-white cursor-pointer w-22'
          onClick={() => setShow(!show)}
        >
         {!show? "Add Guest":"Close"}
        </div>
        <div className='flex self-start space-x-4'>
          <div
            className={
              'self-start text-lg cursor-pointer  ' +
              [tab === 1 ? 'text-gray-900' : 'text-gray-400']
            }
            onClick={() => tabIndex(1)}
          >
            Guest List
          </div>
          <div
            className={
              'self-start text-lg cursor-pointer ' +
              [tab === 2 ? 'text-gray-900' : 'text-gray-400']
            }
            onClick={() => tabIndex(2)}
          >
            RSVPs
          </div>
        </div>

        {show ? (
          <div className='border absolute  top-1/4 px-5 max-w-6xl flex justify-center'>
            <form onSubmit={createInvite}>
              <div>
                <div className='my-2'>Guest Name</div>
                <input
                  type='text'
                  placeholder='Jhon Smit'
                  required
                  className='py-2 bg-slate-100 px-5 w-full outline-none'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='w-full flex flex-col '>
                <div className='my-2'>Phone Number</div>

                <PhoneInput
                  country={'us'}
                  onChange={(phone) => setPhone(phone)}
                  className='!w-full'
                />
              </div>
              {/* party size  */}

              
              {/* ckeck box */}
              <div className='w-full flex space-x-3 py-2 justify-center '>
                {products &&
                  products.map((product, idx) => (
                    <CheckItem
                      key={idx}
                      product={product}
                      handleChange={handleChangeCheck}
                      handleCount={handleCount}
                    />
                  ))}
              </div>

              <button className='bg-gray-800 w-full py-2 text-white uppercase'>
                Submit
              </button>
            </form>
          </div>
        ) : (
          <>
            {tab === 1 ? (
              <div className='w-full flex flex-col my-2 mx-2  '>
                {all &&
                  all.map((guest) => {
                    return (
                      <div className='border-2 h-40  my-2 py-2 px-2 relative'>
                        <div className='flex justify-between'>
                          <div>
                            <div className='text-sm  text-gray-800'>
                              NAME ON INVITATION
                            </div>
                            <div className='flex flex-col justify-center '>
                              <div className='text-xl text-gray-800 uppercase pt-4'>
                                {guest?.name}
                              </div>
                              <div className='text-xs'>{guest?.phone}</div>
                            </div>
                          </div>
                         
                          <div className='text-sm  text-gray-800 uppercase'>
                            <div>Invited to</div>
                            <div className='text-xs text-gray py-2'>
                              {guest?.events.map((event) => {
                                return (
                                  <div className='flex space-x-4  justify-between'>
                                    <div>{event?.name}</div>
                                    <div>{event?.count}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div
                          className='absolute bottom-1'
                          onClick={() => deleteEntry(guest._id)}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className='w-full flex flex-col my-2 mx-2  '>
                <div className='self-start'>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value='ALL'>ALL</option>

                    <option value='HALDI'>HALDI</option>
                    <option value='SANGEET'>SANGEET</option>
                    <option value='WEDDING'>WEDDING</option>
                    <option value='RECEPTIONS'>RECEPTIONS</option>
                  </select>
                </div>
                <div className='w-full flex space-x-3 py-2 justify-center'></div>

                {filterList &&
                  filterList?.map((rsvp) => {
                    return (
                      <div className='border-2 h-40  my-2 py-2 px-2 relative'>
                        <div className='flex justify-between'>
                          <div>
                            <div className='flex flex-col justify-center '>
                              <div className='uppercase'>Name</div>
                              <div className='text-xl text-gray-800 uppercase '>
                                {rsvp?.name}
                              </div>
                              <div className='text-xs'>{rsvp?.phone}</div>
                            </div>
                          </div>
                          
                          <div className='text-sm   text-center text-gray-800 uppercase'>
                            <div>Guest Count</div>
                            <div className='text-xs text-gray '>
                    <div className='grid grid-cols-2	border-2 p-2 text-center   '>
                      <div >
                    <div>HALDI</div> <div>{rsvp?.events?.HALDI}</div>
                      </div>


                      <div>
                    <div>SANGEET</div> <div>{rsvp?.events?.SANGEET}</div>
                      </div>


                      <div>

                    <div>WEDDING</div> <div>{rsvp?.events?.WEDDING}</div>
                      </div>
                      <div>

                    <div>RECEPTIONS</div> <div>{rsvp?.events?.RECEPTIONS}</div>
                      </div>

                    </div>
                     

                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

{
  /* <form
onSubmit={createInvite}
className='flex flex-col justify-center w-full  space-y-10'
>
<div className='w-full'>
  <PhoneInput
    country={'us'}
    onChange={(phone) => setPhone(phone)}
    className='w-full'
  />
</div>
<div className='w-full'>
  <input
    type='text'
    placeholder='name'
    required
    className='py-2 bg-slate-100 px-5 w-full'
    onChange={(e) => setName(e.target.value)}
  />
</div>

<select multiple={true} required onChange={handleChange}>
  <option value='HALDI'>HALDI</option>
  <option value='SANGEET'>SANGEET</option>
  <option value='WEDDING'>WEDDING</option>
  <option value='RECEPTIONS'>RECEPTIONS</option>
</select>
<button
  type='submit'
  className='py-2 bg-slate-800 text-center text-white'
>
  Submit
</button>
</form> */
}

export default InviteOne;
