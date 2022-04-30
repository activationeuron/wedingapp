import React from 'react';
import SectionTitle from '../../components/SectionTitle'
import sImg4 from '../../images/how-we-met.png'
import sIcon4 from '../../images/story/4.png'
import Shape from '../../images/story/shape.jpg'

const StorySection = (props) => {
    return (
      <section className="wpo-story-section section-padding" id="story">
        <div className="container">
          <SectionTitle MainTitle={"Our Love Story"} />
          <div className="row align-items-center justify-content-center">
            <div className="col col-lg-12 col-12">
              <div className="tab-area">
                <div className="wpo-story-item">
                  <div className="wpo-story-img">
                    <img src={sImg4} alt="" />
                  </div>
                  <div className="wpo-story-content">
                    <div className="wpo-story-content-inner">
                      <span>
                        <img src={sIcon4} alt="" />
                      </span>
                      <h2 style={{ fontWeight: '700' }}>How We Met</h2>
                      <p style={{ fontFamily: 'Lato, sans-serif', fontStyle: 'italic', fontSize: '18px' }}>
                        It was a crisp autumn morning; the leaves were just
                        beginning to turn a burnt orange while the breeze still
                        carried warm sun rays. Afaan could feel the adrenaline
                        in the air as he boarded his flight for skydiving.
                        Before he knew it, the plane was 14,000 feet in the air,
                        the mere ground beneath them a dazzling map of ruby
                        treetops and silver streams cutting
                        through the land.
                      </p>
                      <div className="border-shape">
                        <img src={Shape} alt="" />
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


export default StorySection;