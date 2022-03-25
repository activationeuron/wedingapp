import { motion, useAnimation } from 'framer-motion';
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
      className='flex__container flex--active'
      style={{ backgroundColor: mainbg }}
    >
      <div className='flex__item flex__item--left'>
        <div className='flex__content mx-10'>
          <p className='font-prim text-2xl'>We Are Getting Married</p>
          <SlideIn>
            <h1 className='font-head lg:text-6xl text-xl'>{title}</h1>
          </SlideIn>
          <SlideUp>
            <p className='lg:text-2xl font-prim py-10 text-sm'>{text}</p>
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
        className='pokemon__img'
        src='https://images.unsplash.com/photo-1627205265923-190841d62452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        alt='tes'
      />
    </div>
  );
}

export default Slide;
