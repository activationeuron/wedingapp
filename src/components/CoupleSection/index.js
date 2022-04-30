import React, { Component } from 'react';
import coupleImg1 from '../../images/our-story.png'
 
class CoupleSection extends Component {

    render() {
        return (
          <section className="couple-section section-padding" id="couple">
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-xs-12">
                  <div className="couple-area clearfix">
                    <div className="text-grid bride">
                      <h3 style={{ fontWeight: "700" }}>Afaan</h3>
                      <p
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontStyle: "italic",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad ea neque beatae quod fugiat possimus architecto
                        pariatur id in ex maiores culpa omnis repudiandae
                        dolores, quae, ratione veritatis sequi iste!
                        Perspiciatis porro sed architecto explicabo voluptates
                        atque vel!
                      </p>
                    </div>
                    <div className="middle-couple-pic">
                      <div className="middle-couple-pic-inner">
                        <img src={coupleImg1} alt="" />
                      </div>
                    </div>
                    <div className="text-grid groom">
                      <h3 style={{ fontWeight: "700" }}>Mariam</h3>
                      <p
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontStyle: "italic",
                        }}
                      >
                        Mariam Hashmi was born and raised in Chicago. She
                        completed her bachelors in neuropsychology from Southern
                        Illinois University and received her Master of Science
                        at Palo Alto University. Mariam currently works at
                        Northwestern University, and is a published scientific
                        author.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
 
export default CoupleSection;