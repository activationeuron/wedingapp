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
    <div className={styles.slider + ' md:px-40 mx-auto'}>
      <div className={styles.sideImageContainer + ' md:h-96 h-56'}>
        <img
          className={cx(styles.image, styles.prev)}
          src={prevImageUrl}
          alt='Previous'
          onClick={prevImage}
        />
      </div>
      <div className={styles.centerImageContainer + ' md:h-96 h-56'}>
        <img
          className={
            cx(styles.image, styles.current) + ' object-cover object-center '
          }
          src={currentImageUrl}
          alt='Current'
        />
      </div>
      <div className={styles.sideImageContainer + ' md:h-96 h-56'}>
        <img
          className={cx(styles.image, styles.next) + ' object-cover'}
          src={nextImageUrl}
          alt='Next'
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

Slider.propTypes = {
  imagesUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
