import React, { useEffect, useState } from 'react';
import request from '../utils/request';

function Rsvp({ title, mainbg }) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState(localStorage.getItem('phone_NO') || '');
  const [adults, setAdults] = useState();
  const [kids, setKids] = useState();

  const [data, setData] = useState({});

  const createRsvp = async (e) => {
    e.preventDefault();
    const response = await request.post('/event/rsvp', {
      ...{ name, phone, adults, kids },
    });
    if (response.data.success) {
      alert('RSVP Successful  ');
      getEventDetails();
    }
  };

  const getEventDetails = async () => {
    const eventDetails = await request.get(`/event/rsvp/${phone}`);
    console.log(eventDetails.data);
    if (eventDetails.data.success) {
      setData(eventDetails.data.data);
    }
    console.log(eventDetails);
  };

  useEffect(() => {
    const phone = localStorage.getItem('phone_NO');
    if (phone) {
      getEventDetails();
    }
  }, []);

  return (
    <div
      className='flex__container flex--active relative z-10 '
      style={{ backgroundColor: mainbg }}
    >
      <div className='flex__item flex__item--left '>
        <div className='flex__content px-10'>
          {/* <p className='font-prim text-2xl'>We Are Getting Married</p> */}
          <h1 className='font-head text-6xl'>{title}</h1>
          <div className='relative z-10 flex flex-col w-96 my-10'>
            {!data ? (
              <form onSubmit={createRsvp}>
                <input
                  type='text'
                  placeholder='Enter Name'
                  className=' py-2 px-5 outline-none rounded-md bg-indigo-800 shadow-sm  text-white w-full'
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Phone Number'
                  className=' py-2 my-2 px-5 outline-none rounded-md bg-indigo-800 shadow-sm  text-white w-full'
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className='relative z-10 flex space-x-3'>
                  <input
                    type='number'
                    placeholder='Adults'
                    value={adults}
                    required
                    className='py-2 px-5 outline-none rounded-md bg-indigo-800 shadow-sm my-4 text-white w-2/3'
                    onChange={(e) => setAdults(e.target.value)}
                  />
                  <input
                    type='number'
                    placeholder='Kids'
                    value={kids}
                    required
                    onChange={(e) => setKids(e.target.value)}
                    className='py-2 px-5 outline-none rounded-md bg-indigo-800 shadow-sm my-4 text-white w-2/3'
                  />
                </div>
                <button
                  className='py-2 font-bold bg-pink-500 rounded-sm shadow-md uppercase w-full'
                  type='submit'
                >
                  Submit
                </button>
              </form>
            ) : (
              <div>
                <div className='text-2xl font-prim'>
                  {data?.name}, RSVP Done. Thank You!
                </div>
              </div>
            )}

            <div className='space-y-6 pt-10'>
              <div>
                <div className='font-prim '>
                  <div className='text-xl'>Host Info:</div>
                  <div className='flex justify-between space-x-2 text-xl'>
                    <div> Reema Khan:</div> <div> 281-743-5161</div>
                  </div>
                  <div className='flex justify-between space-x-2 text-xl'>
                    <div> Mohsi Mohammed:</div> <div> 818-825-3595</div>
                  </div>
                  <div className='flex justify-between space-x-2 text-xl'>
                    <div> Danyal Mohammed</div> <div> 714-614-8086</div>
                  </div>
                  <div className='flex justify-between space-x-2 text-xl'>
                    <div> Email</div> <div> info@afaanwedsmariyam.com</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='font-prim'>
                  <div className='text-xl'>Event Panner Details:</div>
                  <div className='flex justify-between space-x-2 text-xl'>
                    <div> Vimal Patel</div> <div> 424-409-9020</div>
                  </div>
                  <div className='flex justify-between space-x-2 text-xl'>
                    <div> Email</div> <div> info@afaanwedsmariyam.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
