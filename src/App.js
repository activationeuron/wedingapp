import React, { useEffect, useState } from 'react';
import weddingmain from './assets/videowedding.mp4';
import Bride from './component/newdes/Bride.js';
import Groom from './component/newdes/Groom.js';
import Story from './component/newdes/Story.js';
import Family from './component/newdes/TheFamily.js';
import Slider from './component/newdes/Slider.js';
import Login from './component/Login.js';
import request from './utils/request';
import PhoneInput from 'react-phone-input-2';
import Event from './component/newdes/Events/Event';
import Rsvp from './component/Rsvp';
import main from './assets/main.jpg';
function Two() {
  const slidesData = [
    {
      title: 'Afaan & mariam',
      tagline: 'We are getting married ',
      text: 'Afaan & Mariam were fun, energetic and great teachers. They made difficult topics easier with interactive games and',
      sideImage: '/images/home/one.jpg',
      middleImage: [
        '/images/home/one.jpg',
        '/images/home/two.jpg',
        '/images/home/three.jpg',
        '/images/home/four.jpg',
        '/images/home/five.jpg',
      ],
      bgColor: '#282e2a',
      video: weddingmain,
      key: 'Afaan & mariam',
    },
    {
      title: 'Afaan Mohammed ',
      tagline: 'The Groom',
      text: "rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      middleImage: [
        '/images/groom/three.jpg',
        '/images/groom/four.jpg',
        '/images/groom/five.jpg',
        '/images/groom/one.jpg',
      ],
      sideImage: '/images/groom/two.jpg',
      bgColor: '#2c3f40',
      key: 'The Groom',
    },
    {
      title: 'Mariam Hashmi',
      tagline: 'The Bride',
      text: 'Mariam Hashmi was born and raised in Chicago. She completed her bachelors in neuropsychology from Southern Illinois University and received her Master of Science at Palo Alto University. Mariam currently works at Northwestern University, and is a published scientific author.',
      middleImage: [
        '/images/bride/one.jpg',
        '/images/bride/two.jpg',
        '/images/bride/three.jpg',
        '/images/bride/five.jpg',
        '/images/bride/six.jpg',
      ],
      sideImage: '/images/bride/two.jpg',
      bgColor: '#b80653',
      key: 'The Bride',
    },
    {
      title: 'Afaan & Mariam story',
      tagline: 'Their sweet love story 💕❤️',
      text: 'It was a crisp autumn morning; the leaves were just beginning to turn a burnt orange while the breeze still carried warm sun rays. Afaan could feel the adrenaline in the air as he boarded his flight for skydiving. Before he knew it, the plane was 14,000 feet in the air, the mere ground beneath them a dazzling map of ruby treetops and silver streams cutting through the land. The anticipation before the jump was electrifying. Afaan began to secure his parachute while scanning the passengers when a beautiful desi girl caught his eye. Before he could say hello, his name was called for the jump. \nChecking his straps one last time, he made his way to doors open to nothing but blue skies and chilled air. The rush of thrill raced through his veins as he jumped into nothingness flew through the sky with grace. He swirled and flipped a few thousand feet through the refreshing air… when all of a sudden he noticed that girl again. Yet she didn’t look thrilled, her eyes were in a state of panic, and that’s when he realized her parachute was stuck. Afaan flew through the sky and locked onto her backpack. She looked up at him with knowing eyes and relief. “Nice to meet you. I’m Afaan,” he yelled through the booming sound of rushing air. And well, the rest is history.',
      middleImage: [
        '/images/groom/five.jpg',
        '/images/groom/one.jpg',
        '/images/bride/one.jpg',
        '/images/bride/two.jpg',
        '/images/bride/five.jpg',
        '/images/bride/six.jpg',
        '/images/groom/five.jpg',
        '/images/groom/one.jpg',
      ],
      sideImage: '/images/story/two.webp',
      bgColor: '#6e06b8',
      key: 'The Story',
    },
    {
      title: 'Family',
      // tagline: 'The ',
      text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      middleImage: ['/images/f/seven.jpg', '/images/f/six.jpg'],
      sideImage: '/images/m/two.png',
      bgColor: '#b88806',
      key: 'FAMILY',
      key: 'Family',
    },

    {
      title: 'Affan & Mariam Marriage',
      tagline: 'The Marriage',
      text: 'GWishing you joy, love and happiness on your wedding day and as you begin your new life together.Wishing you joy, love and happiness on your wedding day and as you begin your new life together.',
      middleImage: ['/images/m/one.png', '/images/m/two.jpg'],
      sideImage: '/images/m/two.png',
      bgColor: '#b88806',
      key: 'WEDDING',
      key: 'The Wedding',
    },
    {
      title: 'Haldi',
      tagline: 'Haldi',
      text: 'The haldi ceremony marks the beginning of the wedding rituals and is one of the most important pre wedding rituals after Tilak. The ceremony is held on the morning of the wedding day at the residence of both groom and bride respectively.',
      middleImage: ['/images/haldi/three.webp', '/images/haldi/two.webp'],
      sideImage: '/images/haldi/one.webp',
      bgColor: '#56b806',
      key: 'HALDI',
    },
    {
      title: 'Sangeet',
      tagline: 'Sangeet',
      text: 'Sangeet, which literally translates to “music”, is an event held a few days before the wedding and is filled with dance, music, and vibrant colors. In the olden days, women of all ages gathered around and took turns singing songs and dancing.',
      middleImage: ['/images/s/one.jpg'],
      sideImage: '/images/s/two.jpg',
      bgColor: '#0653b8',
      key: 'SANGEET',
    },
    {
      title: 'Reception',
      tagline: 'The Reception',
      text: 'The Reception details ',
      middleImage: ['/images/r/one.jpg'],
      sideImage: '/images/r/two.jpg',
      bgColor: '#06b891',
      key: 'RECEPTIONS',
    },
  ];

  const [events, setEvents] = useState([]);

  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);
  const getEvents = async (e) => {
    e.preventDefault();
    try {
      const response = await request.get(`/event/myevent/${phone}`);

      if (response.data && response.data.success) {
        setEvents(response.data.data.events);
        localStorage.setItem('phone_NO', phone);
        localStorage.setItem('active', true);
      }
    } catch (error) {
      alert('Invitation Not Found!');
    }
  };
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <>
      <div className='relative '>
        <img
          src={main}
          className='brightness-50 object-cover object-center w-full'
          alt='test'
        />
        <div className='absolute top-2 left-4 right-4   h-40 border-8 flex justify-center items-center'>
          <div className='text-center'>
            <div className='text-4xl font-head text-white'>
              Afaan and Mariam
            </div>
            <div className='text-2xl font-head text-white'>
              Are Getting Married
            </div>
          </div>
        </div>
      </div>

      <div className='min-w-full min-h-screen bg-slate-100 pt-5'>
        <div className='max-w-xl mx-auto  min-h-screen text-center'>
          <div className='text-4xl font-head text-purple-800 '>
            Happy Couple
          </div>
          <Bride image={slidesData[1].middleImage[1]} reveal={true} />
          <Groom image={slidesData[2].middleImage[1]} reveal={false} />
        </div>

        <div className='text-center text-4xl font-head text-purple-800'>
          The story
        </div>
        <div>
          <Story
            imageone={slidesData[1].middleImage[3]}
            imagetwo={slidesData[0].middleImage[2]}
          />
        </div>

        <Family
          imageone={slidesData[4].middleImage[0]}
          imagetwo={slidesData[4].middleImage[1]}
        />
        <div className='text-center text-4xl font-head text-purple-800 py-5'>
          Out Photos
        </div>

        <div>
          <Slider
            imagesUrls={[
              slidesData[2].middleImage[4],
              slidesData[1].middleImage[3],
              slidesData[1].middleImage[1],
              slidesData[2].middleImage[1],
              slidesData[1].middleImage[2],
            ]}
          />
        </div>

        <div>
          <div className='flex  flex-col items-center  justify-center w-full pt-10 '>
            <div className='flex font-head text-purple-800 text-2xl '>
              Enter Phone Number
            </div>
            <form
              onSubmit={(e) => getEvents(e)}
              className='flex flex-col md:flex-row md:space-x-3 space-y-5 md:space-y-0 '
            >
              <div>
                <PhoneInput
                  country={'us'}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
              <button
                className='bg-purple-800 py-1 w-[300px] md:w-[100px]  px-5 font-bold text-white uppercase rounded-sm shadow-md'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
          {/* phone */}
          <div className='text-center py-10 font-head text-2xl text-purple-900'>
            Events
          </div>

          <div>
            {events &&
              events.map((event) => {
                return <Event name={event} place='test' date='12 november' />;
              })}
          </div>
          <div className='flex flex-col  items-center justify-center w-full item-center '></div>
          <div>{events.length && <Rsvp />}</div>
        </div>
      </div>
    </>
  );
}

export default Two;
// {event && (
//   <>
//     <ReactScrollWheelHandler
//     // upHandler={() => handleUp()}
//     // downHandler={() => handleDown()}
//     // wheelConfig={[100, 50, 0]}
//     >
//       {data.map((slide, index) => {
//         return (
//           <Slides
//             sel={selectedSlide}
//             index={index}
//             title={slide.title}
//             tagline={slide.tagline}
//             text={slide.text}
//             middleImage={slide.middleImage}
//             sideImage={slide.sideImage}
//             selectedSlide={selectedSlide}
//             bgColor={slide.bgColor}
//             last={data.length}
//           />
//         );
//       })}
//     </ReactScrollWheelHandler>
//     <div className='absolute  right-1 top-1/2 z-10 space-y-2'>
//       {data.map((data, index) => {
//         return (
//           <div
//             key={index}
//             className={
//               [selectedSlide === index ? 'bg-gray-900 ' : 'bg-gray-400'] +
//               ' w-7 h-2'
//             }
//             onClick={() => setSelectedSlide(index)}
//           ></div>
//         );
//       })}
//     </div>
//     <div className='absolute md:hidden bottom-10 z-10 flex   overflow-x-scroll justify-center'>
//       <div
//         id='scrollContainer'
//         class='flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 w-screen space-x-6 '
//       >
//         {data.map((data, index) => {
//           return (
//             <button
//               key={index}
//               // className={[
//               //   selectedSlide === index ? 'bg-gray-900 ' : 'bg-gray-400',
//               // ]}
//               className={
//                 'flex-none text-white uppercase ' +
//                 [
//                   selectedSlide === index
//                     ? 'bg-pink-700 mx-2 px-2 rounded-full '
//                     : '',
//                 ] +
//                 ' '
//               }
//               onClick={() => setSelectedSlide(index)}
//             >
//               {data.key}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   </>
// )}
