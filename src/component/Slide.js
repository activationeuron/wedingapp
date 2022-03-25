import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function Slide({
  title,
  mainbg,
  text,
  date,
  secImage,
  address,
  image,
  ...pops
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  console.log(pops, 'PROPS');
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      console.log(inView);
    }
  }, [controls, inView]);

  return (
    <div
      className='flex__container flex--active'
      style={{ backgroundColor: mainbg }}
    >
      <div className='flex__item flex__item--left'>
        <div className='flex__content mx-10'>
          <p className='font-prim text-2xl'>We Are Getting Married</p>
          <h1 className='font-head lg:text-6xl text-xl'>{title}</h1>
          <p className='lg:text-2xl font-prim py-10 text-sm'>{text}</p>
          <div className='text-2xl'>
            <span className='font-prim'>{date ? 'Date:' : ''}</span>
            <span className='font-head'>{date}</span>
          </div>
          <div className='font-prim text-2xl'>{address}</div>
        </div>
        <p className='text__background'>{title}</p>
      </div>
      <div
        className='flex__item flex__item--right bg-black'
        style={{ overflow: 'hidden' }}
      >
        <img src={image} alt='' className='object-cover h-screen' />
      </div>
      <img className='pokemon__img' src={secImage} alt='tes' />
    </div>
  );
}

export default Slide;
