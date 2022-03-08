import { useEffect, useState } from 'react';
import logo from './logo.svg';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='blurImg brightness-75 '>
        <div
          style={{
            backgroundImage: `url('https://www.thewedcafe.com/wp-content/uploads/2020/08/SABI4683-Edit.jpg')`,
          }}
        ></div>
        <div
          className='blur'
          style={{
            backgroundImage: `url('https://www.thewedcafe.com/wp-content/uploads/2020/08/SABI4683-Edit.jpg')`,
          }}
        ></div>
      </div>
      <header
        className={[
          'flex  flex-col  w-full h-full justify-end items-center py-16',
        ]}
      >
        <div className='font-tan text-3xl  font-bold text-white py-4'>
          The <span className='text-pink'> Wedding</span> of
        </div>
        <div className='text-7xl font-head text-white'>
          Afaan & Mariam {scrollPosition}
        </div>
      </header>
      <div className='container bg-slate-200'>
        <div>
          <div className='bg-slate-200 font-prim text-pink-500  text-3xl font-bold flex justify-center w-full py-10'>
            ARE GETTING MARRIED
          </div>
        </div>
        <div className=' flex  items-center justify-center space-x-8  '>
          <div>
            <img
              src='https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              alt=''
              className='h-32 w-32 rounded-full object-cover'
            />
          </div>
          <div>
            <img
              src='https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              alt=''
              className='h-32 w-32 rounded-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default App;
