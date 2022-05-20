import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import Simg from '../../images/section-title.png';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer';
import './style.css';
import RSVPForm from '../RSVP/rsvp-form';
import HaldiMap from './haldi-map';
import SangeetMap from './sangeet-map';
import MarriageMap from './marriage-map';
import ReceptionMap from './reception-map';

const EventsPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <section className={`wpo-event-section section-padding`} id='events'>
        <div className='video-container'>
          <video autoPlay loop muted>
            <source src={require('../../images/banner.mp4')} type='video/mp4' />
          </video>
        </div>
        <div className='container' id='events-container'>
          <div className='wpo-section-title'>
            <div className='section-title-img'>
              <img src={Simg} alt='' />
            </div>
            <h2 style={{ fontWeight: '700', color: '#A3888C' }}>
              Time and Place
            </h2>
            {/* <div>
                <Link to="/rsvp" className='rsvp-link'>
                  <h5>Click here to RSVP</h5>
                </Link>
              </div> */}
          </div>
          <div className='wpo-event-wrap'>
            <div className='row'>
              <div className='wpo-about-section-wrapper'>
                <div className='wpo-event-item'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-about-img'>
                        <video
                          width='400'
                          autoPlay
                          loop
                          style={{ objectFit: 'cover', width: '100%' }}
                        >
                          <source
                            src={require('../../images/haldi-ceremony.mp4')}
                            type='video/mp4'
                          />
                        </video>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-event-text'>
                        <h2
                          id='event-name-heading'
                          style={{ fontWeight: '700' }}
                        >
                          HALDI CEREMONY
                        </h2>
                        <h4 style={{ color: '#a3888cd9' }}>Manjha</h4>

                        <ul>
                          <li style={{ fontFamily: 'Lato, sans-serif' }}>
                            Friday, 02 Sep, 2022
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              marginBottom: '0px',
                            }}
                          >
                            At Residence
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              fontStyle: 'italic',
                            }}
                          >
                            <HaldiMap />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='wpo-about-section-wrapper'>
                <div className='wpo-event-item'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-event-text'>
                        <h2
                          id='event-name-heading'
                          style={{ fontWeight: '700' }}
                        >
                          MEHNDI/SANGEET CEREMONY
                        </h2>
                        <h4 style={{ color: '#a3888cd9' }}>Rsam-e-Henna</h4>
                        <ul>
                          <li style={{ fontFamily: 'Lato, sans-serif' }}>
                            Saturday, 03 Sep, 2022
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              marginBottom: '0px',
                            }}
                          >
                            12021 Harbor Blvd, Garden Grove, CA, 9280
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              fontStyle: 'italic',
                            }}
                          >
                            <SangeetMap />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-about-img'>
                        <video
                          width='400'
                          autoPlay
                          loop
                          style={{ objectFit: 'cover', width: '100%' }}
                        >
                          <source
                            src={require('../../images/sangeet-ceremony.mp4')}
                            type='video/mp4'
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='wpo-about-section-wrapper'>
                <div className='wpo-event-item'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-about-img'>
                        <video
                          width='400'
                          autoPlay
                          loop
                          style={{ objectFit: 'cover', width: '100%' }}
                        >
                          <source
                            src={require('../../images/marriage-ceremony.mp4')}
                            type='video/mp4'
                          />
                        </video>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-event-text'>
                        <h2
                          id='event-name-heading'
                          style={{ fontWeight: '700' }}
                        >
                          MARRIAGE CEREMONY
                        </h2>
                        <h4 style={{ color: '#a3888cd9' }}>Nikah Ceremony</h4>

                        <ul>
                          <li style={{ fontFamily: 'Lato, sans-serif' }}>
                            Friday, 09 Sep, 2022
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              marginBottom: '0px',
                            }}
                          >
                            1290 Bluff City Blvd, Elgin, IL 60120
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              fontStyle: 'italic',
                            }}
                          >
                            <MarriageMap />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='wpo-about-section-wrapper'>
                <div className='wpo-event-item'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-event-text'>
                        <h2
                          id='event-name-heading'
                          style={{ fontWeight: '700' }}
                        >
                          RECEPTION
                        </h2>
                        <h4 style={{ color: '#a3888cd9' }}>Dawate-e-Walima</h4>

                        <ul>
                          <li style={{ fontFamily: 'Lato, sans-serif' }}>
                            Friday, 16 Sep, 2022
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              marginBottom: '0px',
                            }}
                          >
                            1201 North, Vine St, Los Angeles, CA 90038
                          </li>
                          <li
                            style={{
                              fontFamily: 'Lato, sans-serif',
                              fontStyle: 'italic',
                            }}
                          >
                            <ReceptionMap />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className='wpo-about-img'>
                        <video
                          width='400'
                          autoPlay
                          loop
                          style={{ objectFit: 'cover', width: '100%' }}
                        >
                          <source
                            src={require('../../images/reception.mp4')}
                            type='video/mp4'
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='rsvp-container'>
                  <div className='form-rsvp'>
                    <h3>PLEASE RSVP</h3>
                    <div className='underline'></div>
                    <form className='fill-form'>
                      <RSVPForm />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default EventsPage;
