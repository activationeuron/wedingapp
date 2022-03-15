import React, { useState } from 'react';
import request from '../utils/request';
import EventDetails from './EventDetails';
function Rsvp() {
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState([]);
  const handleMyEvent = async () => {
    const response = await request.get(`/event/myevent/${email}`);
    if (response) {
      console.log(response);
      setEvent(response.data.data);
    }
  };

  return (
    <>
      <div className='flex__item flex__item--left'>
        <div className='flex__content'>
          <p className='font-prim text-2xl'>You Are Invited</p>
          <h1 className='font-head text-6xl'>RSVP</h1>
          <div className='flex flex-col pb-10 pt-5'>
            <div className='flex w-full '>
              <input
                type='text'
                required={true}
                placeholder='email'
                className='py-2 px-3 rounded-lg text-black'
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className='py-3 px-6 rounded-lg bg-pink-500 mx-2'
                onClick={handleMyEvent}
              >
                Submit
              </button>
            </div>
            {event
              ? event.map((event) => <EventDetails event={event.event} />)
              : 'Enter ...'}
          </div>
        </div>
        <p className='text__background'>Zekrom</p>
      </div>
      <div className='flex__item flex__item--right'></div>
    </>
  );
}

export default Rsvp;
