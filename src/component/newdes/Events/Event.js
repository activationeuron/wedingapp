import React from 'react';

function Event({ name, date, place }) {
  return (
    <div className='relative h-64 flex justify-center'>
      <div className='absolute border-8 border-purple-900 h-60 w-96  '>
        <div className='flex justify-center   py-10 font-head text-2xl text-purple-800 uppercase w-full '>
          <div className=' '>
            <div className='underline'>{name} CEREMONY</div>
            <div className='text-sm pt-4'>
              When <span className='text-black'> {date}</span>
            </div>
            <div className='text-sm pt-4'>
              Where <span className='text-black'> {place}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
