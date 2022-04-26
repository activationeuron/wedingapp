import React from 'react';
import { motion } from 'framer-motion';
function Event(data) {
  return (
    <div className='flex justify-center lg:w-1/3 mx-auto my-10'>
      <div className=' w-full relative h-96 flex lg:mx-1 mx-10'>
        <div className='border-8 border-purple-600 shadow-xl lg:w-7/12 h-72 absolute -top-24 right-8 z-10 hidden lg:block'>
          <video autoPlay loop className='object-cover w-full h-full'>
            <source src={data.data.video} type='video/mp4' />
          </video>
        </div>
        <div className='border-8  border-purple-600 shadow-xl text-center lg:w-7/12 w-full h-72 absolute lg:px-2 py-10 px-10 z-0'>
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
            <div className='text-2xl lg:text-left font-head lg:text-purple-700 text-white'>
              {data?.data?.name}
            </div>
          </div>
          <div className='lg:text-left'>
            <div className='text-sm font-head lg:text-purple-700 text-white hidden lg:block'>
              When:
            </div>
            <span className='text-1xl font-head lg:text-purple-700 text-white'>
              <span>{data?.data?.date}</span>
            </span>
          </div>
          <div className=' lg:text-left lg:w-40 lg:text-purple-700 text-white'>
            <div className='text-sm font-head lg:text-purple-700 text-white hidden lg:block'>
              Where:
            </div>
            <span className='text-1xl  font-head lg:text-purple-700 text-white '>
              <span>{data?.data?.place}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
