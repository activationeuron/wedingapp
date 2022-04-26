import React from 'react';
import { motion } from 'framer-motion';
export default function Story({ imageone, imagetwo }) {
  return (
    <div className='max-w-4xl mx-auto flex md:flex-row flex-col justify-around'>
      <div className='w-full md:w-1/2 relative h-[40rem] '>
        <div className='md:absolute z-10 -left-10 top-10   border-l-8 border-t-8  border-purple-800 p-1 shadow-2xl'>
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
            src={imageone}
            alt=''
            className='h-72  object-cover'
          />
        </div>
        <div className='absolute top-52 right-10 border-r-8 border-b-8 border-purple-800  shadow-2xl p-1 '>
          <motion.img
            initial='hidden'
            whileInView='visible'
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -100 },
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              delay: 0.7,
            }}
            src={imagetwo}
            alt=''
            className='h-80 w-60 object-cover'
          />
        </div>
      </div>

      <div className='w-full md:w-1/2'>
        <div className='text-purple-700 font-prim text-2xl py-4  text-center lg:text-left'>
          How We Meet
        </div>
        <div className='text-purple-900 text-center md:text-left font-head px-3'>
          <motion.p
            initial='hidden'
            whileInView='visible'
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            It was a crisp autumn morning; the leaves were just beginning to
            turn a burnt orange while the breeze still carried warm sun rays.
            Afaan could feel the adrenaline in the air as he boarded his flight
            for skydiving. Before he knew it, the plane was 14,000 feet in the
            air, the mere ground beneath them a dazzling map of ruby treetops
            and silver streams cutting through the land. The anticipation before
            the jump was electrifying. Afaan began to secure his parachute while
            scanning the passengers when a beautiful desi girl caught his eye.
            Before he could say hello, his name was called for the jump.
            Checking his straps one last time, he made his way to doors open to
            nothing but blue skies and chilled air. The rush of thrill raced
            through his veins as he jumped into nothingness flew through the sky
            with grace. He swirled and flipped a few thousand feet through the
            refreshing air… when all of a sudden he noticed that girl again. Yet
            she didn’t look thrilled, her eyes were in a state of panic, and
            that’s when he realized her parachute was stuck. Afaan flew through
            the sky and locked onto her backpack. She looked up at him with
            knowing eyes and relief. “Nice to meet you. I’m Afaan,” he yelled
            through the booming sound of rushing air. And well, the rest is
            history.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
