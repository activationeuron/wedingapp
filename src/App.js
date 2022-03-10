import { useEffect, useState } from 'react';
import Slider from './components/Slider';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(scrollPosition);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Slider />;
};
//
export default App;

// <div>
//       <div className='blurImg brightness-75 '>
//         <div
//           style={{
//             backgroundImage: `url('https://www.thewedcafe.com/wp-content/uploads/2020/08/SABI4683-Edit.jpg')`,
//           }}
//         ></div>
//         <div
//           className='blur'
//           style={{
//             backgroundImage: `url('https://www.thewedcafe.com/wp-content/uploads/2020/08/SABI4683-Edit.jpg')`,
//           }}
//         ></div>
//       </div>
//       <header
//         className={[
//           'flex  flex-col  w-full h-full justify-center items-center py-16',
//         ]}
//       >
//         <div className='font-tan text-3xl  font-bold text-white py-4'>
//           The <span className='text-pink'> Wedding</span> of
//         </div>
//         <div className='text-7xl font-head text-white'>
//           Afaan & Mariam {scrollPosition}
//         </div>
//       </header>
//       <div className='container bg '>
//         <div>
//           <div className='font-prim text-pink-500  text-3xl font-bold flex justify-center w-full py-10'>
//             ARE GETTING MARRIED
//           </div>
//         </div>
//         <div className=' flex  items-center justify-center space-x-8  '>
//           {/* <div>
//             <img
//               src='https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
//               alt=''
//               className='h-32 w-32 rounded-full object-cover'
//             />
//           </div>
//           <div>
//             <img
//               src='https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
//               alt=''
//               className='h-32 w-32 rounded-full object-cover'
//             />
//           </div> */}
//         </div>

//         <div className='flex w-[90rem]  mx-auto items-center justify-center '>
//           <Story />
//           <div className='flex space-x-5 items-center'>
//             <First reverse='flex-row-reverse' />
//             <div className='flex item-center justify-center h-full'></div>
//             <First reverse='' />
//           </div>
//         </div>
//       </div>

//     </div>
