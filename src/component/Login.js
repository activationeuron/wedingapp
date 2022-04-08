import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import request from '../utils/request';

function Login() {
  const [events, setEvents] = useState([]);
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);
  const getEvents = async (e) => {
    e.preventDefault();
    try {
      const response = await request.get(`/event/myevent/${phone}`);

      if (response.data && response.data.success) {
        setEvents(response.data.data.events);
        setShow(true);
        localStorage.setItem('phone_NO', phone);
        localStorage.setItem('active', true);

        window.location.href = '/';
      }
    } catch (error) {
      alert('Invitation Not Found!');
    }
  };
  useEffect(() => {}, [events]);
  return (
    <div>
      <div className='h-screen w-screen bg-slate-700 flex  justify-between items-center '>
        <div>
          <div className='flex flex-col  w-10/12 mx-10 space-y-5'>
            <p className='font-prim text-2xl text-white'>You Are Invited to </p>
            <h1 className='font-head text-6xl text-white leading-tight'>
              Affan & mariam Wedding
            </h1>
            <p className='text-2xl font-prim   text-white'>
              Enter Phone Number{' '}
            </p>
            <form
              onSubmit={(e) => getEvents(e)}
              className='flex flex-col md:flex-row md:space-x-3 space-y-5 md:space-y-0 '
            >
              <div>
                <PhoneInput
                  country={'us'}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
              <button
                className='bg-pink-800 py-1 w-[300px] md:w-[100px]  px-5 font-bold text-white uppercase rounded-sm shadow-md'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='w-1/3 bg-pink-600'>
          <img
            src='/images/home/one.jpg'
            alt=''
            className='object-cover object-center h-screen w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
