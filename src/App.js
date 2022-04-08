import React, { useEffect, useState } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import Slides from './component/Slides/Slide.js';
import request from './utils/request.js';
import Rsvp from './component/Rsvp';
function Two() {
  const slidesData = [
    {
      title: 'Affan & mariam',
      tagline: 'We are getting married ',
      text: 'Afaan & Mariam were fun, energetic and great teachers. They made difficult topics easier with interactive games and',
      middleImage: '/images/home/one.jpg',
      sideImage: '/images/home/one.jpg',
      bgColor: '#282e2a',
    },
    {
      title: 'Afaan Mohammed ',
      tagline: 'The Groom',
      text: 'affan details ',
      middleImage: '/images/groom/one.jpg',
      sideImage: '/images/groom/two.jpg',
      bgColor: '#2c3f40',
    },
    {
      title: 'Mariam Hashmi',
      tagline: 'The Bride',
      text: 'Mariam Hashmi was born and raised in Chicago. She completed her bachelors in neuropsychology from Southern Illinois University and received her Master of Science at Palo Alto University. Mariam currently works at Northwestern University, and is a published scientific author.',
      middleImage: '/images/bride/one.jpg',
      sideImage: '/images/bride/two.jpg',
      bgColor: '#b80653',
    },
    {
      title: 'Affan & Mariam story',
      tagline: 'The Story',
      text: 'Mariam Hashmi story',
      middleImage: '/images/story/one.webp',
      sideImage: '/images/story/two.webp',
      bgColor: '#6e06b8',
    },
    {
      title: 'Affan & Mariam Marriage',
      tagline: 'The Marriage',
      text: 'Grand Wedding...',
      middleImage: '/images/m/one.webp',
      sideImage: '/images/m/two.webp',
      bgColor: '#b88806',
      key: 'WEDDING',
    },
    {
      title: 'Haldi',
      tagline: 'Haldi',
      text: 'The haldi ceremony marks the beginning of the wedding rituals and is one of the most important pre wedding rituals after Tilak. The ceremony is held on the morning of the wedding day at the residence of both groom and bride respectively.',
      middleImage: '/images/haldi/one.webp',
      sideImage: '/images/haldi/one.webp',
      bgColor: '#56b806',
      key: 'HALDI',
    },
    {
      title: 'Sangeet',
      tagline: 'Sangeet',
      text: 'Sangeet, which literally translates to “music”, is an event held a few days before the wedding and is filled with dance, music, and vibrant colors. In the olden days, women of all ages gathered around and took turns singing songs and dancing.',
      middleImage: '/images/s/one.jpg',
      sideImage: '/images/s/two.jpg',
      bgColor: '#0653b8',
      key: 'SANGEET',
    },
    {
      title: 'Reception',
      tagline: 'The Reception',
      text: 'The Reception details ',
      middleImage: '/images/r/one.jpg',
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
      const presentData = [...slidesData.slice(0, 3)];
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
            upHandler={() => handleUp()}
            downHandler={() => handleDown()}
            wheelConfig={[100, 50, 0]}
          >
            <div className='relative z-10'>{event}</div>
            {data.map((slide, index) => {
              return (
                <Slides
                  key={index}
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
          <div className='absolute right-1 top-1/2 z-10 space-y-2'>
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
        </>
      )}
    </>
  );
}

export default Two;
