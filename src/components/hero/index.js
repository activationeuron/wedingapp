import React from 'react'
import TimeCountDown from '../countdown'
import hImg1 from '../../images/banner-decoration.png'
import hImg2 from '../../images/slider/shape2.png'
import './style.css';

const Hero = () => {
    return(
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid" id='home-container'>
                        <div className="row align-items-center" style={{ justifyContent: 'center' }}>
                            <div className="col-xl-12 col-lg-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="shape-1"><img src={hImg1} alt="hImg1"/></div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2 style={{ fontWeight: '600' }}>Afaan &amp; Mariam</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700', fontStyle: 'italic' }}>Getting Married Sep 9, 2022</p>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <TimeCountDown/>
                                        </div>
                                    </div>
                                    <div className="shape-2"><img src={hImg2} alt="hImg2"/></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;