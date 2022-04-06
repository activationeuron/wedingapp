import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import TextAnimation from 'react-text-animations';
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
          <div className='pt-5 w-72 text-sm sm:text-2xl md:w-96'>
            <div className='font-head   text-pink-500 mb-2 '>
              Fun Facts About Afan & Mariam
            </div>

            <TextAnimation.Slide
              target='""'
              animation={{
                duration: 1000,
                delay: 2000,
                timingFunction: 'ease-out',
              }}
              text={[
                'both have identical moles on their left palms',
                'have the same half birthday: birthday ',
                'both have a cat named Nala',
                'both played professional sports',
              ]}
            >
              They ""
            </TextAnimation.Slide>
          </div>

          <SlideUp>
            <p className='lg:text-2xl font-prim py-5 text-sm '>{text}</p>
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
