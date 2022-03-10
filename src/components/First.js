import React from 'react';

function First({ reverse, name }) {
  return (
    <div className='bg-slate-400 mx-3'>
      <div className={['flex items-center ' + reverse]}>
        <div>
          <img
            src='https://www.modelfactory.in/assets/frontend/images/homeabout1.jpeg'
            className='rounded-2xl w-44 h-44 shadow-2xl'
            alt='test'
          />
        </div>
        <div className='w-1/2 mx-2 '>
          <div className='text-pink-500 text-2xl  font-bold  font-prim'>
            {name}
          </div>
          <div className='font-prim text-2xl text-slate-800 text-sm'>
            father & mothers name
          </div>
          <div className='text-xl py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptatibus fuga iste, quam veniam quae ut explicabo ratione odit
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
