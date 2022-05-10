import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import one from '../../assets/images/1.jpeg';
import two from '../../assets/images/2.jpeg';
import three from '../../assets/images/3.jpeg';
import four from '../../assets/images/4.jpeg';
import five from '../../assets/images/5.jpeg';
import six from '../../assets/images/6.jpeg';
import seven from '../../assets/images/7.jpeg';
import eight from '../../assets/images/8.jpeg';
import nine from '../../assets/images/9.jpeg';
import ten from '../../assets/images/10.jpeg';
import aa from '../../assets/images/12.jpeg';
import ab from '../../assets/images/13.jpeg';
import ac from '../../assets/images/14.jpeg';
import ad from '../../assets/images/15.jpeg';
import ae from '../../assets/images/16.jpeg';
import af from '../../assets/images/17.jpeg';
import ag from '../../assets/images/18.jpeg';
import ak from '../../assets/images/19.jpeg';
import ah from '../../assets/images/20.jpeg';
import ai from '../../assets/images/21.jpeg';
import aj from '../../assets/images/22.jpeg';
const App = () => {
  const images = [
    one,
    two,
    three,
    five,
    six,
    four,
    seven,
    eight,
    nine,
    ten,
    aa,
    ab,
    ac,
    ad,
    af,
    ae,
    ag,
    ak,
    ah,
    ai,
    aj,
  ].map((number) => ({
    src: number,
  }));

  return <Carousel images={images} style={{ height: 1000, width: 800 }} />;
};

export default App;
