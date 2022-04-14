import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CrossFade from 'react-crossfade-image';

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
  video,
}) {
  const logout = () => {
    localStorage.removeItem('phone_NO');
    window.location.href = '/login';
  };
  const clickRsvp = () => {
    window.location.href = '/rsvp';
  };

  const [image, setImage] = useState(middleImage[0]);
  const [counter, setCounter] = useState(0);
  console.log(middleImage);
  useEffect(
    () => {
      const interval = setInterval(() => {
        setImage(middleImage[counter + 1]);
        setCounter(counter + 1);
        console.log('ba9i masalina');
      }, 3000);
      if (counter >= middleImage.length) {
        clearInterval(interval);
        console.log('salina');
      }

      return () => clearInterval(interval);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [counter, middleImage]
  );

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
          >
            <video
              className='content brightness-50 h-full w-full object-cover video-viewport  '
              autoPlay
              loop
              muted
            >
              <source
                src={
                  'https://storage.googleapis.com/amitrai/Pexels%20Videos%202078587.mp4'
                }
                type='video/mp4'
              />
            </video>
            <div className='flex__item flex__item--left pt-20 w-full lg:w-[65%]'>
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
                className='text__background '
              >
                {title}
              </motion.p>
            </div>
            <div className='flex__item flex__item--right   lg:w-[35%] hidden lg:flex '>
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
              className='pokemon__img  max-h-[60vh] right-16 lg:right-56 lg:max-h-[25vh]'
              src={middleImage[0]}
              alt='Powerkick'
            />
            <div className='pokemon__img    right-2 lg:right-56 lg:max-h-[25vh]'>
              {/* <CrossFade
                style={{
                  backgroundSize: 'cover',
                }}
                src={image || middleImage[0]}
              /> */}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Slides;
