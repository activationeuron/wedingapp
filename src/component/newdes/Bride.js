import React from 'react';
import { motion } from 'framer-motion';
function Bride({ image }) {
  return (
    <div>
      <div className='w-full flex flex-col md:flex-row  justify-between h-98 pt-10 md:space-x-10 '>
        <div className='w-1/2 relative '>
          {/* <div className=' hidden md:block border-8 border-purple-800 absolute w-full h-96 right-10 top-10'></div> */}
          <div className='hidden md:block border-purple-500 absolute w-full h-96'>
            <motion.img
              initial='hidden'
              whileInView='visible'
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                delay: 0.7,
              }}
              src={image}
              className='object-cover object-center h-full'
              alt=''
            />
          </div>
        </div>

        <div className='md:w-1/2 w-full flex flex-col text-center  md:text-left'>
          <motion.div
            className='text-3xl font-head text-purple-800 '
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
          >
            Afaan
          </motion.div>
          <motion.div
            className='font-prim text-purple-800 underline'
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
            The Groom
          </motion.div>
          <div className='lg:hidden bottom-8 border-purple-800 p-3'>
            <img src={image} alt='' className='px-10 mx-auto' />
          </div>
          <motion.div className='font-head my-5 text-purple-800 px-5 mx-auto'>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea
              neque beatae quod fugiat possimus architecto pariatur id in ex
              maiores culpa omnis repudiandae dolores, quae, ratione veritatis
              sequi iste! Perspiciatis porro sed architecto explicabo voluptates
              atque vel! At, earum deleniti quas fuga aliquid blanditiis animi
              sed, possimus molestias, voluptatem laboriosam voluptate excepturi
              tempora optio adipisci accusamus. Officia ab labore laudantium
              molestias.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Bride;