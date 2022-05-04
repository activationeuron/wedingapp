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
    { slug: 'HALDI', name: 'HALDI', checked: false },
    { slug: 'SANGEET', name: 'SANGEET', checked: false },
    { slug: 'WEDDING', name: 'WEDDING', checked: false },
    { slug: 'RECEPTIONS', name: 'RECEPTIONS', checked: false },
  ]);

  const handleChangeCheck = (slug) => {
    const copyProducts = [...products];
    const modifiedProducts = copyProducts.map((product) => {
      if (slug === product.slug) {
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

  const handleChange = (e) => {
    let target = e.target;
    //here
    let value = Array.from(target.selectedOptions, (option) => option.value);
    setEvents(value);
    console.log(value);
    // setEvents(value);
  };

  const createInvite = async (e) => {
    e.preventDefault();
    try {
      const response = await request.post('/event/create', {
        name,
        phone,
        events: products.map((product) => product.slug),
        limit: 12,
      });
      if (response.data.success) {
        alert('INVITATION SUCCESS');
        getAllIncitations();
      }
    } catch (error) {
      console.log(error.message);
      alert('INVITATION FAILED');
    }
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

  return (
    <div>
      <div className='flex flex-col items-center px-10 md:w-1/2 mx-auto space-y-10 relative h-screen'>
        <div className='text-center text-2xl uppercase'>Create Invitations</div>
        <div
          className='px-2 py-2 bg-slate-800 text-white cursor-pointer '
          onClick={() => setShow(!show)}
        >
          Add Guest
        </div>

        {show ? (
          <div className='border absolute  top-1/4 p-5 max-w-6xl flex justify-center'>
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

              <div className='w-full flex flex-col '>
                <div className='my-2'>Party Size</div>
                <input
                  onChange={(e) => setParty(e.target.value)}
                  type='number'
                  placeholder='0'
                  className='py-2 bg-slate-100 px-5 w-full outline-none'
                />
              </div>
              {/* ckeck box */}
              <div className='w-full flex space-x-3 py-2 justify-center'>
                {products &&
                  products.map((product, idx) => (
                    <CheckItem
                      key={idx}
                      product={product}
                      handleChange={handleChangeCheck}
                    />
                  ))}
              </div>

              <button className='bg-gray-800 w-full py-2 text-white uppercase'>
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className='w-full flex flex-col my-2 mx-2  '>
            {all &&
              all.map((guest) => {
                return (
                  <div className='border-2 h-40  my-2 py-2 px-2'>
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
                        Party Size
                      </div>
                      <div className='text-sm  text-gray-800 uppercase'>
                        <div>Invited to</div>
                        <div className='text-xs text-gray py-2'>
                          {guest.events.map((event) => {
                            return <div>{event}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
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
