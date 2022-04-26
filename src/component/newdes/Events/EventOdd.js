import React from 'react';
import { motion } from 'framer-motion';
function Event(data) {
  return (
    <div className='flex justify-center lg:w-1/3  mx-auto my-10'>
      <div className=' w-full relative h-60 lg:h-96 flex lg:mx-2 mx-10'>
        <div className='border-8 border-purple-600 shadow-xl w-full lg:w-7/12 h-72 absolute -top-16 lg:-right-5 text-right py-10 px-2 z-0'>
          {/* <img
            src={data?.data?.image}
            className='object-cover absolute h-full w-full top-0 left-0 lg:hidden -z-10 brightness-50'
            alt=''
          /> */}
          <video
            autoPlay
            loop
            className='object-cover w-full h-full absolute top-0 left-0 -z-20 brightness-50 lg:hidden'
          >
            <source src={data.data.video} type='video/mp4' />
          </video>
          <div className='lg:text-left text-center lg:pl-20 '>
            <div className='text-2xl font-head lg:text-purple-700 text-white'>
              {data?.data?.name}
            </div>
          </div>
          <div className='lg:text-left text-center lg:pl-20 '>
            <div className=' text-sm font-head lg:text-black text-white hidden lg:block '>
              When:
            </div>
            <div className='text-1xl  font-head lg:text-purple-700 text-white '>
              <div>{data?.data?.date}</div>
            </div>
          </div>
          <div className='lg:text-left text-center lg:pl-20 '>
            <div className='text-sm font-head lg:text-black text-white hidden lg:block'>
              Where:
            </div>
            <div className='text-1xl  font-head lg:text-purple-700 text-white '>
              <div>{data?.data?.place}</div>
            </div>
          </div>
        </div>

        <div className='border-8  border-purple-600 shadow-xl w-7/12 h-72 absolute z-10 hidden lg:block'>
          {/* <img src={data?.data?.image} className='object-cover h-full' alt='' /> */}

          <video autoPlay loop className='object-cover w-full h-full'>
            <source src={data.data.video} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Event;
