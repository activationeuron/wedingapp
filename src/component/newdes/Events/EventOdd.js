import React from 'react';
import { motion } from 'framer-motion';
function Event(data) {
  return (
    <div className='flex justify-center lg:w-1/3  mx-auto my-10'>
      <div className=' w-full relative h-60 lg:h-80 flex lg:mx-2 mx-10'>
        <div className='border-8 border-purple-900 w-full lg:w-1/2 h-64 absolute -top-16 lg:right-20 text-right py-10 px-2 z-0'>
          <img
            src={data?.data?.image}
            className='object-cover absolute h-full w-full top-0 left-0 lg:hidden -z-10 brightness-50'
            alt=''
          />

          <div className='lg:text-left text-center lg:pl-20 '>
            <span className='text-2xl font-head lg:text-purple-700 text-white'>
              {data?.data?.name}
            </span>
          </div>
          <div className='lg:text-left text-center lg:pl-20 '>
            <span className=' text-sm font-head lg:text-black text-white'>
              When:
            </span>
            <span className='text-1xl mx-2 font-head lg:text-purple-700 text-white '>
              <span>{data?.data?.date}</span>
            </span>
          </div>
          <div className='lg:text-left text-center lg:pl-20 '>
            <span className='text-sm font-head lg:text-black text-white '>
              Where:
            </span>
            <span className='text-1xl mx-2 font-head lg:text-purple-700 text-white '>
              <span>{data?.data?.place}</span>
            </span>
          </div>
        </div>

        <div className='border-8  border-purple-900 w-1/2 h-64 absolute z-10 hidden lg:block'>
          <img src={data?.data?.image} className='object-cover h-full' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Event;
