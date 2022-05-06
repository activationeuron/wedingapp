import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import StorySection from '../../components/StorySection';
import CoupleSection2 from '../../components/CoupleSection2'
import VideoSection from '../../components/VideoSection'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';

const HomePage =() => {

    return (
      <Fragment>
        <Navbar hclass={"wpo-site-header-s1"} />
        <Hero />
        <VideoSection />
        <CoupleSection2 />
        <StorySection />
        <Footer />
        <Scrollbar />
      </Fragment>
    );
};

export default HomePage;