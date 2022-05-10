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

  return <div></div>;
}

// const showDetails = (tagline, title, text, last, index, clickRsvp) => {
//   return (
//     <div className='absolute top-1 z-20 mx-5 py-10'>
//       <div>
//         <p className='text--sub text-white'>{tagline}</p>
//         <motion.h1
//           className=' font-head text-white lg:text-[72px] text-4xl '
//           initial={{ y: -1000, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{
//             ease: 'anticipate',
//             duration: 0.5,
//             delay: 0.5,
//           }}
//         >
//           {title}
//         </motion.h1>
//         <motion.p
//           initial={{ x: -1000, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{
//             ease: 'easeInOut',
//             duration: 0.5,
//             delay: 0.4,
//           }}
//           className='text--normal w-[33%] font-prim h-96 overflow-y-scroll'
//         >
//           {text}
//           {last - 1 === index && (
//             <div className='relative z-10  w-40  py-5'>
//               <div
//                 className='text-3xl text-white bg-yellow-900 px-4 py-1 cursor-pointer rounded-sm  text-center'
//                 onClick={clickRsvp}
//               >
//                 RSVP
//               </div>
//             </div>
//           )}
//         </motion.p>
//       </div>
//     </div>
//   );
// };
export default Slides;
