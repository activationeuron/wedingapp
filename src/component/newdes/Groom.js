import React from 'react';
import { motion } from 'framer-motion';

function Groom({ image }) {
  return (
    <div>
      <div className='w-full flex flex-col md:flex-row  justify-between h-98 py-10 space-x-10'>
        <div className='md:w-1/2 w-full flex flex-col text-center  md:text-left '>
          <motion.div
            className='text-3xl font-head text-purple-800 '
            initial='hidden'
            whileInView='visible'
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.7,
            }}
          >
            Mariam
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -100 },
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.7,
            }}
            className='font-prim text-purple-800 '
          >
            The Bride
          </motion.div>
          <div className='lg:hidden bottom-8 border-purple-800 p-3'>
            <img src={image} alt='' className='px-10 mx-auto   ' />
          </div>
          <div className='font-head my-5 text-purple-800 px-5 mx-auto'>
            <motion.p
              initial='hidden'
              whileInView='visible'
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.7,
              }}
            >
              Mariam Hashmi was born and raised in Chicago. She completed her
              bachelors in neuropsychology from Southern Illinois University and
              received her Master of Science at Palo Alto University. Mariam
              currently works at Northwestern University, and is a published
              scientific author.ptatem, hic ea atque dicta minima molestiae
              harum.
            </motion.p>
          </div>
        </div>
        <div className='w-1/2 relative '>
          <div className=' hidden md:block border-8 border-purple-800 absolute w-full h-96 -right-10 top-10'></div>
          <div className='hidden md:block border-purple-500 absolute w-full h-96'>
            <motion.img
              initial='hidden'
              whileInView='visible'
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              src={image}
              className='object-cover object-center h-full'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groom;
