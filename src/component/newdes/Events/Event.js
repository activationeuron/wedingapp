import React from 'react';
import { motion } from 'framer-motion';
function Event(data) {
  return (
    <div className='flex justify-center lg:w-1/3 mx-auto my-10'>
      <div className=' w-full relative h-80 flex lg:mx-1 mx-10 text-center lg:text-left'>
        <div className='border-8 border-purple-900 lg:w-1/2 h-64 absolute -top-16 right-20 z-10 hidden lg:block'>
          <video autoPlay loop className='object-cover w-full h-full'>
            <source src={data.data.video} type='video/mp4' />
          </video>
        </div>
        <div className='border-8  border-purple-900 lg:w-1/2 w-full h-64 absolute lg:px-2 py-10 px-10 z-0'>
          <img
            src={data?.data?.image}
            className='object-cover w-full h-full absolute top-0 left-0 -z-20 brightness-50 lg:hidden'
            alt=''
          />
          <video
            autoPlay
            loop
            className='object-cover w-full h-full absolute top-0 left-0 -z-20 brightness-50 lg:hidden'
          >
            <source src={data.data.video} type='video/mp4' />
          </video>
          <div>
            <span className='text-2xl font-head lg:text-purple-700 text-white'>
              {data?.data?.name}
            </span>
          </div>
          <div>
            <span className='text-sm font-head lg:text-black text-white'>
              When:
            </span>
            <span className='text-1xl mx-2 font-head lg:text-purple-700 text-white'>
              <span>{data?.data?.date}</span>
            </span>
          </div>
          <div className='lg:w-40 lg:text-purple-700 text-white'>
            <span className='text-sm font-head lg:text-black text-white'>
              Where:
            </span>
            <span className='text-1xl mx-2  font-head lg:text-purple-700 text-white '>
              <span>{data?.data?.place}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
