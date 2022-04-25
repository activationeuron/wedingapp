import React, { useEffect, useState } from 'react';
import request from '../utils/request';
import image from '../assets/one.jpg';
function Rsvp({ title, mainbg }) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState(localStorage.getItem('phone_NO') || '');

  const [plus, setPlus] = useState(false);
  const [plusName, setPlusName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState({});

  const createRsvp = async (e) => {
    e.preventDefault();
    const response = await request.post('/event/rsvp', {
      ...{ name, phone, plus, plusName, email },
    });
    if (response.data.success) {
      alert('RSVP Successful  ');
      getEventDetails();
    }
  };

  const getEventDetails = async () => {
    const eventDetails = await request.get(`/event/rsvp/${phone}`);
    console.log(eventDetails.data);
    if (eventDetails.data.success) {
      setData(eventDetails.data.data);
    }
    console.log(eventDetails);
  };

  useEffect(() => {
    const phone = localStorage.getItem('phone_NO');
    if (phone) {
      getEventDetails();
    }
  }, []);

  return (
    <div className=' flex--active relative z-10  '>
      <div className='flex__item flex__item--left '>
        <div className=' px-5 px-auto lg:px-10 mx-auto'>
          {/* <p className='font-prim text-2xl'>We Are Getting Married</p> */}
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
                  className='py-2 font-bold bg-purple-800 rounded-sm shadow-md uppercase w-full'
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
      </div>
    </div>
  );
}

export default Rsvp;
