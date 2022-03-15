import React, { useEffect, useState } from 'react';
import request from '../utils/request';

function EventDetails(props) {
  const [data, setData] = useState();
  const getEventData = async (id) => {
    const response = await request.get(`/event/${id}`);
    if (response.data?.success) {
      setData(response.data?.data);
    }
  };
  useEffect(() => {
    getEventData(props.event);
  }, [props.event]);
  return (
    <div className='my-3 w-full'>
      {data ? (
        <div className='bg-gray-800 w-full'>{data.eventname}</div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default EventDetails;
