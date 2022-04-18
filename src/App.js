import React, { useEffect, useState } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import Slides from './component/Slides/Slide.js';
import request from './utils/request.js';
import Rsvp from './component/Rsvp';
import weddingmain from './assets/videowedding.mp4';
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

  const [selectedSlide, setSelectedSlide] = useState(0);
  const [event, setEvent] = useState([]);
  const [data, setData] = useState(slidesData);
  const handleUp = () => {
    if (selectedSlide > 0) {
      setSelectedSlide(selectedSlide - 1);
    }
    console.log('handle down' + selectedSlide);
  };
  const handleDown = () => {
    if (selectedSlide < data.length - 1) {
      setSelectedSlide(selectedSlide + 1);
    }
    console.log('handle Up' + selectedSlide);
  };

  const getData = async (phone) => {
    const respone = await request.get(`/event/myevent/${phone}`);

    setEvent(respone?.data?.data.events);
  };
  useEffect(() => {
    const active = JSON.parse(localStorage.getItem('active'));
    if (!active) {
      window.location.href = '/login';
    } else {
      // const phone
      const phone = JSON.parse(localStorage.getItem('phone_NO'));
      getData(phone);
    }
  }, []);

  useEffect(() => {
    if (event.length) {
      console.log(event, 'event');
      const presentData = [...slidesData.slice(0, 5)];
      slidesData.map((data) => {
        if (event.includes(data.key)) {
          presentData.push(data);
        }
        setData(presentData);
      });
    }
  }, [event]);

  return (
    <>
      {event && (
        <>
          <ReactScrollWheelHandler
          // upHandler={() => handleUp()}
          // downHandler={() => handleDown()}
          // wheelConfig={[100, 50, 0]}
          >
            {data.map((slide, index) => {
              return (
                <Slides
                  sel={selectedSlide}
                  index={index}
                  title={slide.title}
                  tagline={slide.tagline}
                  text={slide.text}
                  middleImage={slide.middleImage}
                  sideImage={slide.sideImage}
                  selectedSlide={selectedSlide}
                  bgColor={slide.bgColor}
                  last={data.length}
                />
              );
            })}
          </ReactScrollWheelHandler>
          <div className='absolute  right-1 top-1/2 z-10 space-y-2'>
            {data.map((data, index) => {
              return (
                <div
                  key={index}
                  className={
                    [selectedSlide === index ? 'bg-gray-900 ' : 'bg-gray-400'] +
                    ' w-7 h-2'
                  }
                  onClick={() => setSelectedSlide(index)}
                ></div>
              );
            })}
          </div>
          <div className='absolute md:hidden bottom-10 z-10 flex   overflow-x-scroll justify-center'>
            <div
              id='scrollContainer'
              class='flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 w-screen space-x-6 '
            >
              {data.map((data, index) => {
                return (
                  <button
                    key={index}
                    // className={[
                    //   selectedSlide === index ? 'bg-gray-900 ' : 'bg-gray-400',
                    // ]}
                    className={
                      'flex-none text-white uppercase ' +
                      [
                        selectedSlide === index
                          ? 'bg-pink-700 mx-2 px-2 rounded-full '
                          : '',
                      ] +
                      ' '
                    }
                    onClick={() => setSelectedSlide(index)}
                  >
                    {data.key}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Two;
