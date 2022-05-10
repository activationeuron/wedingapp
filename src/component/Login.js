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
      }
    } catch (error) {
      alert('Invitation Not Found!');
    }
  };
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);
  return (
    <div className='flex  flex-col items-center  justify-center w-full  '>
      <div className='flex font-head text-purple-800 text-2xl '>
        Enter Phone Number
      </div>
      <form
        onSubmit={(e) => getEvents(e)}
        className='flex flex-col md:flex-row md:space-x-3 space-y-5 md:space-y-0 '
      >
        <div>
          <PhoneInput country={'us'} onChange={(phone) => setPhone(phone)} />
        </div>
        <button
          className='bg-pink-800 py-1 w-[300px] md:w-[100px]  px-5 font-bold text-white uppercase rounded-sm shadow-md'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
