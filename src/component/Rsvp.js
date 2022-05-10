import React, { useEffect, useState } from 'react';
import request from '../utils/request';
import image from '../assets/one.jpg';

import mainvideo from '../assets/main.mp4';
import sangeet from '../assets/sangeet.mp4';
import haldi from '../assets/haldi.mp4';
import recp from '../assets/reciptions.mp4';
import merrage from '../assets/marriage.mp4';
import Event from './newdes/Events/Event';

import EventOdd from './newdes/Events/EventOdd';
import PhoneInput from 'react-phone-input-2';
import Icon from './Icon';
import mainBanner from '../assets/mainban.png';

function Rsvp({ title, mainbg }) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState(localStorage.getItem('phone_NO') || '');

  const [plus, setPlus] = useState(false);
  const [plusName, setPlusName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState({});

  const [events, setEvents] = useState([]);

  const [rsvpList, setRsvpList] = useState([]);

  const dataT = {
    WEDDING: {
      name: 'Merrage Ceremony',
      date: '9th september 2022',
      place: 'Mount Prospect IL',
      video: merrage,
      image:
        'https://cdn0.weddingwire.in/article/9752/original/960/jpg/92579-these-wedding-trends-from-2020-are-here-to-stay-in-2021-stories-by-joseph-radhik-a-new-definition-of-destination-weddings.webp',
    },
    RECEPTIONS: {
      name: 'Reception',
      date: '16th september 2022',
      place: 'Villa Contempo Estate',
      video: recp,

      image:
        'https://cf.ltkcdn.net/weddings/images/orig/237407-3500x2337--wedding-tent.jpg',
    },
    SHALDI: {
      name: 'Marriage Ceremony',
      date: '9th september 2022',
      place: 'Mount Prospect IL',
      video: merrage,

      image:
        'https://cdn0.weddingwire.in/article/9752/original/960/jpg/92579-these-wedding-trends-from-2020-are-here-to-stay-in-2021-stories-by-joseph-radhik-a-new-definition-of-destination-weddings.webp',
    },
    SANGEET: {
      name: 'Sangeet Ceremony',
      date: '4th september 2022',
      place: 'TBD',
      video: sangeet,

      image:
        'https://www.bookeventz.com/blog/wp-content/uploads/2017/05/Sangeet-ceremony-840x480.jpg',
    },
    HALDI: {
      name: 'Haldi Ceremony',
      date: '3rd september 2022',
      place: '2259 Camino Rey Fullerton CA 92833',
      image: 'https://imgk.timesnownews.com/story/Haldi_ceremony_1.jpg',
      video: haldi,
    },
  };

  const createRsvp = async (e) => {
    e.preventDefault();
    if (!rsvpList.length) {
      alert('Please Select An Event!');
    } else {
      const response = await request.post('/event/rsvp', {
        ...{ name, phone, plus, plusName, email, events: rsvpList },
      });
      if (response.data.success) {
        alert('RSVP Successful  ');
        getEventDetails();
      }
    }
  };

  const getEventDetails = async () => {
    const eventDetails = await request.get(`/event/rsvp/${phone}`);
    console.log(eventDetails.data);
    if (eventDetails.data.success) {
      setData(eventDetails.data.data);
    } else {
      setData({});
    }
    console.log(eventDetails);
  };

  useEffect(() => {
    const phone = localStorage.getItem('phone_NO');
    if (phone) {
      getEventDetails();
    }
  }, []);

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
      setEvents([]);
      localStorage.setItem('events', []);
      // alert('Invitation Not Found!');
    }
    getEventDetails();
  };

  const handleNumberClick = (number) => {
    setRsvpList((rsvpList) =>
      rsvpList.includes(number)
        ? rsvpList.filter((n) => n !== number)
        : [number, ...rsvpList]
    );
  };

  return (
    <div className=' flex--active relative z-10  pt-10 '>
      <img
        src={mainBanner}
        alt=''
        className='absolute top-0 z-10 flex justify-center '
      />

      <div className='flex__item flex__item--left relative z-40'>
        <div className=' px-5 px-auto lg:px-10 mx-auto'>
          {/* <p className='font-prim text-2xl'>We Are Getting Married</p> */}
          <div className='text-center lg:py-10 py-10 font-head text-2xl text-purple-900'>
            Events
            <p className='text-sm'>Tap To Select Event You Wish To Attend </p>
          </div>
          {!events.length && (
            <div className='flex lg:h-96   py-96 md:py-2  flex-col items-center   w-full pt-10 '>
              <div className='flex font-head text-purple-800 text-2xl '>
                Enter Phone Number
              </div>
              <form
                onSubmit={(e) => getEvents(e)}
                className='flex flex-col md:flex-row md:space-x-3 space-y-5 md:space-y-0 '
              >
                <div>
                  <PhoneInput
                    className='text-black'
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
          )}

          <div className=' w-screen'>
            {events &&
              events?.length &&
              events?.map((event, i) => {
                return (
                  <>
                    <div key={i}>
                      {i % 2 === 0 ? (
                        <div
                          className='relative'
                          onClick={() => handleNumberClick(event)}
                        >
                          <div className='absolute  bottom-20 right-20  lg:left-1/3 lg:px-4 z-30'>
                            <Icon
                              stroke={
                                rsvpList.includes(event) ? '#eb00f7' : '#000'
                              }
                            />
                          </div>{' '}
                          <div
                            onClick={() => handleNumberClick(event)}
                            className=' relative z-20'
                          >
                            <Event data={dataT[event]} />
                          </div>
                        </div>
                      ) : (
                        <div
                          className='relative  '
                          onClick={() => handleNumberClick(event)}
                        >
                          <div className='absolute bottom-20 right-20  lg:left-1/3 lg:px-4 z-30'>
                            <Icon
                              stroke={
                                rsvpList.includes(event) ? '#eb00f7' : '#000'
                              }
                            />
                          </div>
                          <div
                            onClick={() => handleNumberClick(event)}
                            className=' relative z-20'
                          >
                            <EventOdd data={dataT[event]} />
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
          </div>

          {events.length ? (
            <div className='flex flex-col  items-center '>
              <h1 className='font-head text-6xl text-purple-800'>Rsvp</h1>
              <div className='relative z-10 flex flex-col w-80 lg:w-[35rem] my-10'>
                {!data ? (
                  <form onSubmit={createRsvp} className='space-y-3'>
                    <input
                      type='text'
                      placeholder='Enter Name'
                      className=' py-2 px-5 text-purple-800 w-full'
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='Phone Number'
                      className=' py-2 px-5 text-purple-800 w-full'
                      value={phone}
                      required
                      disabled
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                      type='email'
                      placeholder='Your Email '
                      className=' py-2 px-5 text-purple-800 w-full'
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='relative z-10 flex space-x-3 text-purple-900 py-2'>
                      {plus && (
                        <label>
                          <input
                            type='checkbox'
                            value={plus}
                            onChange={(e) => setPlus(!plus)}
                          />
                          Plus One
                        </label>
                      )}
                      {!plus && (
                        <div className='relative  w-full'>
                          <input
                            type='text'
                            placeholder='Plus One Name'
                            className=' py-2 px-5 text-purple-800  w-full'
                            value={plusName}
                            required
                            onChange={(e) => setPlusName(e.target.value)}
                          />
                          <div
                            className='absolute top-2 right-4    flex justify-center items-center border-purple-900 rounded-full'
                            onClick={(e) => {
                              setPlusName('');
                              setPlus(!plus);
                            }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              class='h-6 w-6'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              stroke-width='2'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      className='py-2 font-bold text-white bg-purple-800 rounded-sm shadow-md uppercase w-full'
                      type='submit'
                    >
                      Submit
                    </button>
                  </form>
                ) : (
                  <div>
                    <div className='text-2xl font-prim text-purple-800'>
                      {data?.name}, RSVP Done. Thank You!
                    </div>
                  </div>
                )}

                <div className=' w-80 lg:w-full space-y-6 pt-10 '>
                  <div>
                    <div className='font-prim space-y-1'>
                      <div className='text-base lg:text-lg  text-gray-800'>
                        Host Info:
                      </div>
                      <div className='flex justify-between text-base text-purple-800 lg:text-lg  '>
                        <div> Reema Khan:</div> <div> 281-743-5161</div>
                      </div>
                      <div className='flex justify-between text-base text-purple-800 lg:text-lg'>
                        <div> Mohsi Mohammed:</div> <div> 818-825-3595</div>
                      </div>
                      <div className='flex justify-between text-base text-purple-800 lg:text-lg'>
                        <div> Danyal Mohammed</div> <div> 714-614-8086</div>
                      </div>
                      <div className='flex justify-between text-base text-purple-800 lg:text-lg'>
                        <div> Email</div> <div> info@afaanwedsmariyam.com</div>
                      </div>
                    </div>
                  </div>

                  <div className='font-prim'>
                    <div className='text-base lg:text-lg  text-gray-800'>
                      Event Panner Details:
                    </div>
                    <div className='flex justify-between space-x-2 text-purple-800 '>
                      <div> Vimal Patel</div> <div> 424-409-9020</div>
                    </div>
                    <div className='flex justify-between space-x-2 text-purple-800 '>
                      <div> Email</div> <div> info@afaanwedsmariyam.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
