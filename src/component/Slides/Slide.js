import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
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
  video,
  sel,
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
      console.log(sel, index);
      if (sel === index) {
        const interval = setInterval(() => {
          setImage(middleImage[counter + 1]);
          setCounter(counter + 1);
          console.log(sel, index, counter, 'sele');
        }, 3500);
        if (counter >= middleImage.length - 1) {
          setCounter(0);
          // console.log('salina');
          // clearInterval(interval);
        }
        return () => clearInterval(interval);
      } else {
        setImage(middleImage[0]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [counter, sel, index]
  );

  const [isDragable, setDraggable] = useState(true);

  return (
    <AnimatePresence exitBeforeEnter>
      {selectedSlide === index && (
        <>
          <div className='slider__warpper hidden lg:block'>
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
              <div className='flex__item flex__item--left pt-20 w-full lg:w-[65%] '>
                <div className='flex__content'>
                  <p className=' font-head'>{tagline}</p>
                  <motion.h1
                    className='text--big lg:text-[72px] text-4xl font-head'
                    initial={{ y: -1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: 'anticipate',
                      duration: 0.5,
                      delay: 0.5,
                    }}
                  >
                    <div className='font-head text-white'>{title}</div>
                  </motion.h1>
                  <motion.p
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.5,
                      delay: 0.4,
                    }}
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
                  className='text__background text-white '
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
              {/* <motion.img
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'backInOut', duration: 0.7 }}
              className='pokemon__img  max-h-[60vh] right-16 lg:right-56 lg:max-h-[25vh]'
              src={middleImage[0]}
              alt='Powerkick'
            /> */}

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
          <div className='lg:hidden relative h-screen'>
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
            {showDetails(tagline, title, text, last, index, clickRsvp)}
            <motion.div
              style={{
                width: isDragable ? 250 : 300,
                height: isDragable ? 250 : 500,
                borderRadius: 30,
                cursor: 'grab',
              }}
              // onClick={() => setDraggable(!isDragable)}
              className='absolute  z-50 bg-black overflow-hidden shadow-xl'
              drag={isDragable}
              dragConstraints={{
                top: 50,
                right: 200,
                bottom: 500,
                left: 20,
              }}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
              dragElastic={0.1}
              whileDrag={{ scale: 1.5 }}
              whileTap={{ cursor: 'grabbing', scale: 1.8 }}
            >
              <div className='text-white   '>
                <img
                  src={image ? image : middleImage[0]}
                  alt='image'
                  className='object-cover object-center h-full w-full'
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

const showDetails = (tagline, title, text, last, index, clickRsvp) => {
  return (
    <div className='absolute top-1 z-20 mx-5 py-10'>
      <div>
        <p className='text--sub text-white'>{tagline}</p>
        <motion.h1
          className=' font-head text-white lg:text-[72px] text-4xl '
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'anticipate',
            duration: 0.5,
            delay: 0.5,
          }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.4,
          }}
          className='text--normal w-[33%] font-prim h-96 overflow-y-scroll'
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
    </div>
  );
};
export default Slides;
