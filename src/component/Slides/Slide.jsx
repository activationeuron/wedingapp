import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
function Slides({
  tagline,
  title,
  text,
  middleImage,
  sideImage,
  index,
  selectedSlide,
  bgColor,
}) {
  return (
    <AnimatePresence exitBeforeEnter>
      {selectedSlide === index && (
        <div className='slider__warpper'>
          <div
            className={
              [index === selectedSlide ? 'flex--active' : ''] +
              ' flex__container flex--pikachu '
            }
            style={{ backgroundColor: bgColor }}
            data-slide='1'
          >
            <div className='flex__item flex__item--left lg:w-[65%]'>
              <div className='flex__content'>
                <p className='text--sub'>{tagline}</p>
                <motion.h1
                  className='text--big lg:text-[100px] text-4xl '
                  initial={{ y: -1000, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: 'anticipate', duration: 0.5, delay: 0.5 }}
                >
                  {index}
                  {title}
                </motion.h1>
                <motion.p
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
                  className='text--normal'
                >
                  {text}
                </motion.p>
              </div>
              <motion.p
                initial={{ y: -1000, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'anticipate', duration: 0.5 }}
                className='text__background'
              >
                {title}
              </motion.p>
            </div>
            <div className='flex__item flex__item--right lg:w-[35%] hidden lg:flex'>
              <motion.img
                initial={{ y: -1000, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'anticipate', duration: 0.5 }}
                src={sideImage}
                alt=''
                className='object-cover   w-full h-screen relative '
              />
            </div>
            <motion.img
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'backInOut', duration: 0.7 }}
              className='pokemon__img'
              src={middleImage}
              alt='Powerkick'
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Slides;
