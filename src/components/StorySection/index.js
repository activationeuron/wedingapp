import React from 'react';
import SectionTitle from '../../components/SectionTitle'
import sIcon4 from '../../images/story/4.png'
import Shape from '../../images/story/shape.jpg'
import './style.css'

const StorySection = (props) => {
    return (
      <section className="wpo-story-section section-padding" id="story">
        <div className="container">
          <SectionTitle MainTitle={"Our Story"} />
          <div className="row align-items-center justify-content-center">
            <div className="col col-lg-12 col-12">
              <div className="tab-area">
                <div className="wpo-story-item">
                  <div className="wpo-story-content">
                    <div className="wpo-story-content-inner">
                      <span>
                        <img src={sIcon4} alt="" />
                      </span>
                      <p
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontStyle: "italic",
                          fontSize: "18px",
                        }}
                      >
                        It was a crisp autumn morning; the leaves were just
                        beginning to turn a burnt orange while the breeze still
                        carried warm sun rays. Afaan could feel the adrenaline
                        in the air as he boarded his flight for skydiving.
                        Before he knew it, the plane was 14,000 feet in the air,
                        the mere ground beneath them a dazzling map of ruby
                        treetops and silver streams cutting through the land.
                        The anticipation before the jump was electrifying. Afaan
                        began to secure his parachute while scanning the
                        passengers when a beautiful desi girl caught his eye.
                        Before he could say hello, his name was called for the
                        jump. Checking his straps one last time, he made his way
                        to doors open to nothing but blue skies and chilled air.
                        The rush of thrill raced through his veins as he jumped
                        into nothingness flew through the sky with grace. He
                        swirled and flipped a few thousand feet through the
                        refreshing air… when all of a sudden he noticed that
                        girl again. Yet she didn’t look thrilled, her eyes were
                        in a state of panic, and that’s when he realized her
                        parachute was stuck. Afaan flew through the sky and
                        locked onto her backpack. She looked up at him with
                        knowing eyes and relief. “Nice to meet you. I’m Afaan,”
                        he yelled through the booming sound of rushing air. And
                        well, the rest is history.
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