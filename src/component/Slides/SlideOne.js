import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FadeInWhenVisible } from '../Animtaions/FadeInWhenVisable';
import { SlideIn } from '../Animtaions/SlideIn';
import { SlideUp } from '../Animtaions/SlideUp';

function Slide({
  title,
  mainbg,
  text,
  date,
  address,
  secImage,
  image,
  ...pops
}) {
  return (
    <div
      className='flex__container flex--active relative'
      style={{ backgroundColor: mainbg }}
    >
      <div className='flex__item flex__item--left md:w-[65%] '>
        <div className='flex__content mx-10 '>
          <p className='font-prim text-2xl '>We Are Getting Married</p>
          <h1 className='font-head lg:text-6xl text-xl block md:hidden'>
            {title}
          </h1>
          <SlideIn>
            <h1 className='font-head lg:text-6xl text-xl hidden md:block'>
              {title}
            </h1>
          </SlideIn>

          <SlideUp>
            <p className='lg:text-2xl font-prim  pt-5 pb-10 text-sm '>{text}</p>
          </SlideUp>
          <div className='text-2xl'>
            <span className='font-prim'>{date ? 'Date:' : ''}</span>
            <span className='font-head'>{date}</span>
          </div>
          <div className='font-prim text-2xl'>{address}</div>
        </div>
        <p className='text__background'>{title}</p>
      </div>
      <div
        className='flex__item flex__item--right bg-pink-900'
        style={{ overflow: 'hidden' }}
      >
        <FadeInWhenVisible>
          <img src={image} alt='' className='object-cover h-screen' />
        </FadeInWhenVisible>
      </div>

      <img
        className='md:hidden   absolute w-full h-full object-cover  -z-10 opacity-20 '
        src={secImage}
        alt='tes'
        // className='absolute'
      />
      <AnimatePresence>
        <motion.img
          whileInView='animate'
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className='md:block  pokemon__img  '
          src={secImage}
          alt='tes'
          // className='absolute'
        />
      </AnimatePresence>
    </div>
  );
}

export default Slide;
