import React, { useEffect, useState } from 'react';
import { Stickyroll } from '@stickyroll/stickyroll';
import Slide from './component/Slide';
import Slideone from './component/Slides/SlideOne';
import Slidetwo from './component/Slides/SlideTwo';
import SlideThree from './component/Slides/SlideThree';
import SlideFour from './component/Slides/SlideFour';
import SlideFive from './component/Slides/SlideFive';
import SlideSix from './component/Slides/SlideSix';
import SlideSeven from './component/Slides/SlideSeven';
import request from './utils/request';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Rsvp from './component/Rsvp';
import main from './assets/sangeet/main.jpg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);

  const [slides, setSlides] = useState([
    <Slideone
      title='Afaan & Mariam'
      mainbg='#8b1173'
      secondarybg='#000'
      image='https://cdn0.weddingwire.in/article/9779/3_2/960/jpg/79779-maharashtrian-wedding-the-dawn-studio-lead-image.webp'
      secImage='https://getethnic.com/wp-content/uploads/2020/05/muslim-pakistani-wedding-photography-nikkah-reception-dallas-20.jpg'
      text='Afaan & Mariam were fun, energetic and great teachers. They made difficult topics easier with interactive games and work sheets. '
    />,
    <Slidetwo
      title='Afaan Mohammed'
      mainbg='#614344'
      secondarybg='#000'
      image='https://scontent.fbom16-1.fna.fbcdn.net/v/t39.30808-6/265909369_3107021362877182_6124694639183512288_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a26aad&_nc_ohc=MMk73PulaHMAX-3VXoi&_nc_ht=scontent.fbom16-1.fna&oh=00_AT_jbbOzuw1CpEV8R5eYmnfdiyKxHmFFA-BZrj1P9_wQlg&oe=623EA6C0'
      text='Afaan were fun, energetic and great teachers. They made difficult topics easier with interactive games and work sheets. '
    />,
    <SlideThree
      title='Mariam Hashmi'
      mainbg='#023436'
      secondarybg='#000'
      image='https://scontent.fbom16-1.fna.fbcdn.net/v/t39.30808-6/273157112_3147806885465296_8193586718288628038_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=D8KHnLAzA7IAX9u3M9p&_nc_ht=scontent.fbom16-1.fna&oh=00_AT9P1X39XrawKw2eeRZh-2CynkDipvfxacgOyIpmD8gSUg&oe=623DFAB8'
      secImage='https://getethnic.com/wp-content/uploads/2020/05/1599px-Band_known_as_Imam_Zamin.jpg'
      text='Mariam were fun, energetic and great teachers. They made difficult topics easier with interactive games and work sheets. '
    />,
    <SlideFour
      title='The Story'
      text='Mariam were fun, energetic and great teachers. They made difficult topics easier with interactive games and work sheets. '
      secImage='https://keepinitfrugal.com/wp-content/uploads/2019/08/25-frugal-no-tech-date-night-ideas-for-couples-1.jpg'
      image='https://images.pexels.com/photos/2055236/pexels-photo-2055236.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
      mainbg='#162521'
    />,
  ]);

  const getEvents = async (e) => {
    e.preventDefault();
    try {
      const response = await request.get(`/event/myevent/${phone}`);

      if (response.data && response.data.success) {
        setEvents(response.data.data.events);
        setShow(true);
        localStorage.setItem('phone_NO', phone);
      }
    } catch (error) {
      alert('Invitation Not Found!');
    }
  };
  useEffect(() => {
    console.log(events);

    if (events.includes('HALDI')) {
      console.log('haldi  included');
      setSlides((old) => [
        ...old,
        <Slide
          title='Haldi'
          mainbg='#503D3F'
          image='https://www.brides.com/thmb/4S5aFa-lX0zK9mNUWY1hiAyvHy4=/750x0/filters:no_upscale():max_bytes(200000):strip_icc():format(webp)/234-d3d2dbc2c1bd4083a811448b4e966681.png'
          date='09-03-2022'
          address='2259 Camino Rey Fullerton CA 92833'
          secImage='https://www.stonedsanta.in/wp-content/uploads/2018/07/1.jpg'
          text='The Haldi ceremony is a ritual holy bath also known as pithi ceremony, which is one of the pre-wedding ceremonies in India.'
        />,
      ]);
      console.log(slides);
    }
    if (events.includes('WEDDING')) {
      console.log('merrage  status');
      setSlides((old) => [
        ...old,
        <SlideFive
          title='Marriage'
          date='09-08-2022'
          image='https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          address='Mount Prospect IL'
          mainbg='#260F26'
        />,
      ]);
    }
    if (events.includes('SANGEET')) {
      setSlides((old) => [
        ...old,
        <SlideSix
          title='Sangeet'
          text='In sangeet, family members on either side organise and song and dance party, and in the mehndi ceremony, they wear intricate designs made from henna paste on their hands and feet'
          date='09-04-2022'
          image='https://assets.vogue.in/photos/61935447f4644c073f462a41/master/w_1600,c_limit/257616096_642474753725288_3568332279694208332_n.jpg'
          secImage='https://www.k4fashion.com/wp-content/uploads/2021/11/marathi-couple-portrait-photography-15.jpg'
          address='Villa Contempo Estate'
          mainbg='#B1CC74'
        />,
      ]);
    }
    if (events.includes('RECEPTIONS')) {
      setSlides((old) => [
        ...old,
        <SlideSeven
          title='Receptions'
          date='09-16-2022'
          image='https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2015/08/rustic-barn-wedding-reception-ideas-with-floral-chandelier.jpg'
          address='Mount Prospect IL'
          mainbg='#5FAD41'
        />,
      ]);
    }
    if (events.length) {
      setSlides((old) => [...old, <Rsvp title='RSVP' mainbg='#251F47' />]);
    }
  }, [events]);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  console.log(ref);
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      {show ? (
        <Stickyroll pages={slides} factor={0.5}>
          {({ page, pageIndex, pages, progress }) => {
            return (
              <div className='slider__warpper'>
                <div className='absolute z-10'> {page}</div>
                <div>{slides[pageIndex]}</div>
              </div>
            );
          }}
        </Stickyroll>
      ) : (
        <>{phoneBox(setPhone, getEvents)}</>
      )}
    </>
  );
};
const phoneBox = (setPhone, getEvents) => {
  return (
    <div className='h-screen w-screen bg-slate-700 flex  justify-between items-center '>
      <div>
        <div className='flex flex-col  w-10/12 mx-10 space-y-5'>
          <p className='font-prim text-2xl text-white'>You Are Invited to </p>
          <h1 className='font-head text-6xl text-white leading-tight'>
            Affan & mariam Wedding{' '}
          </h1>
          <p className='text-2xl font-prim   text-white'>Enter Phone Number </p>
          <form onSubmit={(e) => getEvents(e)} className='flex space-x-3'>
            <div>
              <PhoneInput
                country={'us'}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <button
              className='bg-pink-800 py-1  px-5 font-bold text-white uppercase rounded-sm shadow-md'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='w-1/3 bg-pink-600'>
        <img
          src={main}
          alt=''
          className='object-cover object-center h-screen w-full'
        />
      </div>
    </div>
  );
};

export default App;
