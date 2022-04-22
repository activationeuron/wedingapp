import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Slider.module.css';

const Slider = ({ imagesUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getPrevIndex = (currentIndex) =>
    (imagesUrls.length + currentIndex - 1) % imagesUrls.length;
  const getNextIndex = (currentIndex) => (currentIndex + 1) % imagesUrls.length;

  const prevImageIndex = getPrevIndex(currentImageIndex);
  const nextImageIndex = getNextIndex(currentImageIndex);

  const prevImageUrl = imagesUrls[prevImageIndex];
  const currentImageUrl = imagesUrls[currentImageIndex];
  const nextImageUrl = imagesUrls[nextImageIndex];

  const nextImage = () => {
    setCurrentImageIndex(getNextIndex);
  };

  const prevImage = () => {
    setCurrentImageIndex(getPrevIndex);
  };

  return (
    <div className='flex justify-center max-w-7xl items-center space-x-2'>
      <div className=' w-1/4   '>
        <img
          src={prevImageUrl}
          alt='Previous'
          onClick={prevImage}
          className='object-cover object-center rounded-lg lg:h-[40rem]'
        />
      </div>
      <div className=' w-1/2 flex justify-center  '>
        <img
          src={currentImageUrl}
          alt='Current'
          className='object-cover object-center rounded-lg lg:h-[45rem]'
        />{' '}
      </div>
      <div className='w-1/4  '>
        <img
          src={nextImageUrl}
          alt='Next'
          onClick={nextImage}
          className='object-cover object-center rounded-lg lg:h-[40rem]'
        />
      </div>
    </div>
  );
};

Slider.propTypes = {
  imagesUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
