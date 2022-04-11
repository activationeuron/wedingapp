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
  last,
}) {
  const logout = () => {
    localStorage.removeItem('phone_NO');
    window.location.href = '/login';
  };
  const clickRsvp = () => {
    window.location.href = '/rsvp';
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {selectedSlide === index && (
        <div className='slider__warpper'>
          <div className='relative z-10 text-white pointer' onClick={logout}>
            Logout
          </div>
          <div
            className={
              [index === selectedSlide ? 'flex--active' : ''] +
              ' flex__container flex--pikachu '
            }
            style={{ backgroundColor: bgColor }}
            data-slide='1'
          >
            <div className='flex__item flex__item--left w-full lg:w-[65%]'>
              <div className='flex__content'>
                <p className='text--sub'>{tagline}</p>
                <motion.h1
                  className='text--big lg:text-[72px] text-4xl '
                  initial={{ y: -1000, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: 'anticipate', duration: 0.5, delay: 0.5 }}
                >
                  {title}
                </motion.h1>
                <motion.p
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
                  className='text--normal w-[33%] '
                >
                  {text}
                  {last - 1 === index && (
                    <div className='relative z-10  w-40  py-5'>
                      <div
                        className='text-3xl text-white bg-yellow-900 px-4 py-1 cursor-pointer rounded-sm  text-center'
                        onClick={clickRsvp}
                      >
                        RSVP
                      </div>
                    </div>
                  )}
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
            <div className='flex__item flex__item--right lg:w-[35%] hidden lg:flex '>
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
              className='pokemon__img '
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
