import { motion } from 'framer-motion';
export default function Family({ imageone, imagetwo, imagethree }) {
  return (
    <div className='max-w-4xl mx-auto flex md:flex-row flex-col justify-around'>
      <div className='w-full md:w-1/2 relative h-[50rem] hidden lg:block '>
        <div className='md:absolute z-10 -left-28 top-2 h-52  border-t-8 border-l-8 border-purple-600 p-1 shadow-2xl'>
          <motion.img
            initial='hidden'
            whileInView='visible'
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
            src={imageone}
            alt=''
            className='h-72 w-60 object-cover'
          />
        </div>
        <div className='absolute top-44 right-10 border-r-8 border-b-8 border-purple-600 p-1 shadow-2xl'>
          <motion.img
            initial='hidden'
            whileInView='visible'
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            src={imagetwo}
            alt=''
            className='h-80 w-60 object-cover'
          />
        </div>
        <div className='absolute lg:top-[25rem] lg:-left-10 border-r-8 border-b-8 border-purple-600 p-1 shadow-2xl'>
          <motion.img
            initial='hidden'
            whileInView='visible'
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            src={imagethree}
            alt=''
            className='h-80 w-60 object-cover'
          />
        </div>
      </div>

      <div className='w-full md:w-1/2 '>
        <div className='w-full md:w-1/2 relative h-[52rem] lg:hidden'>
          <div className='md:absolute z-10 -left-10 top-10 h-96  border-t-8 border-l-8 border-purple-600 p-3'>
            <motion.img
              initial='hidden'
              whileInView='visible'
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              src={imageone}
              alt=''
              className='h-72 w-60 object-cover'
            />
          </div>
          <div className='absolute top-[300px] right-2 border-r-8 border-b-8 border-purple-600 p-3'>
            <motion.img
              initial='hidden'
              whileInView='visible'
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -100 },
              }}
              src={imagetwo}
              alt=''
              className='h-80 w-60 object-cover'
            />
          </div>
          <div className='absolute top-[32rem] lg:-left-10 border-r-8 border-b-8 border-purple-600 p-3'>
            <motion.img
              initial='hidden'
              whileInView='visible'
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              src={imagethree}
              alt=''
              className='h-80 w-60 object-cover'
            />
          </div>
        </div>
        <div className='text-purple-900 font-head px-5 mx-auto text-center flex flex-col justify-center h-full'>
          <div className='text-purple-700 font-prim text-2xl text-center py-10 lg:py-0'>
            The Family
          </div>
          <div className='text-center md:text-left'>
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
            nothing but blue skies and chilled air.
          </div>
        </div>
      </div>
    </div>
  );
}
