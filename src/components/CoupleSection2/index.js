import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import coupleImg1 from '../../images/afaan.png';
import coupleImg2 from '../../images/mariam.png';
import coupleImg3 from '../../images/mariam1.jpeg';

class CoupleSection2 extends Component {
  render() {
    return (
      <section
        className={`couple-section-s2 section-padding ${this.props.cClass}`}
        id='couple'
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col col-xs-12'>
              <div className='couple-area clearfix'>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='couple-item'>
                      <div className='couple-img'>
                        <img src={coupleImg1} alt='' />
                      </div>
                      <div className='couple-text'>
                        <h3 style={{ fontWeight: '700' }}>Afaan</h3>
                        <p>
                          Afaan Mohammed was born in Detroit grew up in both
                          Chicago and Orange County. As a kid you would always
                          find Afaan at the park playing with everyone who was
                          there. He trained in the sport of tennis for about 10+
                          years and travelled for tournaments. Afaan would
                          always get scolded for being disruptive and talking
                          too much and not paying attention. In highschool he
                          would help everybody with their homework and help them
                          cheat on tests but he ended up getting the bad grade
                          because he never did the homework. Nonetheless, he got
                          into University of California, Santa Barbara and
                          graduated with a double major in Philosophy and
                          Accounting. Now he’s a Financial Analyst and is
                          managing a portfolio of securities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='middle-couple-text'>
                      <Slide bottom cascade>
                        <h2>
                          <span>L</span>
                          <span>o</span>
                          <span>v</span>
                          <span>e</span>
                        </h2>
                      </Slide>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='couple-item'>
                      <div className='couple-img'>
                        <img
                          src={coupleImg3}
                          alt=''
                          style={{
                            width: '371px !important',
                            height: '371px !important',
                            objectPosition: 'center',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className='couple-text'>
                        <h3 style={{ fontWeight: '700' }}>Mariam</h3>
                        <p>
                          Mariam Hashmi was born and raised in Chicago. She
                          completed her bachelors in neuropsychology from
                          Southern Illinois University and received her Master
                          of Science at Palo Alto University. Mariam currently
                          works at Northwestern University, and is a published
                          scientific author.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoupleSection2;
