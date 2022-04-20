import React, { useState, useEffect } from 'react';
import { calculateCountdownFromNow, Container } from './utils';

const countdownDate = '2022-08-09 00:00:00';

function Timer() {
  const [
    {
      expired,
      values: { days, hours, minutes, seconds },
    },
    setResult,
  ] = useState(() => calculateCountdownFromNow(countdownDate));

  useEffect(() => {
    if (expired) return undefined;
    const intervalId = setInterval(
      () => setResult(calculateCountdownFromNow(countdownDate)),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [expired]);
  return (
    <div>
      {expired ? (
        "It's the time"
      ) : (
        <div className='flex justify-center space-x-3'>
          <div className='flex justify-center text-center'>
            <div>
              <div className='font-head text-2xl text-purple-900'>
                {days < 10 ? 0 : ''}
                {days}
              </div>
              <div className='font-head'>DAYS</div>
            </div>

            <div className='res relative -top-1 lg:px-2'>:</div>
          </div>
          <div className='flex justify-center text-center'>
            <div>
              <div className='font-head text-2xl text-purple-900'>
                {hours < 10 ? 0 : ''}
                {hours}
              </div>
              <div className='font-head'>HOURS</div>
            </div>
            <div className='res relative -top-1 lg:px-2'>:</div>
          </div>
          <div className='flex justify-center text-center '>
            <div>
              <div className='font-head text-2xl text-purple-900'>
                {minutes < 10 ? 0 : ''}
                {minutes}
              </div>
              <div className='font-head'>MINUTES</div>
            </div>
            <div className='res relative -top-1 lg:px-2'>:</div>
          </div>
          <div className='flex justify-center text-center'>
            <div>
              <div className='font-head text-2xl text-purple-900'>
                {seconds < 10 ? 0 : ''}
                {seconds}
              </div>
              <div className=' hidden md:block font-head'>SECONDS</div>
              <div className=' md:hidden block font-head'>SEC</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;
