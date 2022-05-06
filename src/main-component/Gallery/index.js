import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2";
import PageTitle from "../../components/pagetitle";
import pImg1 from "../../images/gallery/1.png";
import pImg2 from "../../images/gallery/2.png";
import pImg3 from "../../images/gallery/5.png";
import pImg4 from "../../images/gallery/4.png";
import pImg5 from "../../images/gallery/3.png";
import pImg6 from "../../images/gallery/9.png";
import pImg7 from "../../images/gallery/8.png";
import pImg8 from "../../images/gallery/7.png";
import pImg9 from "../../images/gallery/6.png";
import pImg10 from "../../images/gallery/10.png";
import pImg11 from "../../images/gallery/11.png";
import pImg12 from "../../images/gallery/12.png";
import pImg13 from "../../images/gallery/14.png";
import pImg14 from "../../images/gallery/15.png";
import pImg15 from "../../images/gallery/16.png";
import pImg16 from "../../images/gallery/17.png";
import pImg17 from "../../images/gallery/18.png";
import pImg18 from "../../images/gallery/19.png";
import pImg19 from "../../images/gallery/20.png";
import pImg20 from "../../images/gallery/21.png";
import pImg21 from "../../images/gallery/22.png";
import pImg22 from "../../images/gallery/23.png";
import pImg23 from "../../images/gallery/24.png";
import pImg24 from "../../images/gallery/25.png";
import pImg25 from "../../images/gallery/26.png";
import pImg26 from "../../images/gallery/27.png";
import pImg27 from "../../images/gallery/28.png";
import pImg28 from "../../images/gallery/29.png";
import pImg29 from "../../images/gallery/30.png";
import pImg30 from "../../images/gallery/31.png";
import pImg31 from "../../images/gallery/32.png";
import pImg32 from "../../images/gallery/33.png";
import pImg33 from "../../images/gallery/34.png";
import pImg34 from "../../images/gallery/gallery-2.png";
import pImg35 from "../../images/gallery/gallery-4.png";
import pImg36 from "../../images/gallery/gallery-5.png";
import pImg37 from "../../images/gallery/gallery-7.png";
import pImg38 from "../../images/gallery/gallery-9.png";
import pImg39 from "../../images/gallery/gallery-18.png";
import pImg40 from '../../images/gallery/35.jpeg'
import pImg41 from '../../images/gallery/36.jpeg'
import pImg42 from '../../images/gallery/37.jpg'
import pImg43 from '../../images/gallery/38.jpg'
import pImg44 from '../../images/gallery/39.png'
import pImg45 from "../../images/gallery/40.png";
import pImg46 from "../../images/gallery/41.png";
import pImg47 from "../../images/gallery/42.png";

import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";

const Portfolios = [
  {
    Pimg: pImg1,
  },
  {
    Pimg: pImg2,
  },
  {
    Pimg: pImg3,
  },
  {
    Pimg: pImg4,
  },
  {
    Pimg: pImg5,
  },
  {
    Pimg: pImg47
  },
  {
    Pimg: pImg6,
  },
  {
    Pimg: pImg7,
  },
  {
    Pimg: pImg8,
  },
  {
    Pimg: pImg10,
  },
  {
    Pimg: pImg11,
  },

  {
    Pimg: pImg12,
  },
  {
    Pimg: pImg13,
  },
  {
    Pimg: pImg44
  },
  {
    Pimg: pImg43,
  },
  {
    Pimg: pImg14,
  },
  {
    Pimg: pImg40,
  },
  {
    Pimg: pImg41,
  },
  {
    Pimg: pImg15,
  },
  {
    Pimg: pImg16,
  },
  {
    Pimg: pImg17,
  },
  {
    Pimg: pImg18,
  },
  {
    Pimg: pImg19,
  },
  {
    Pimg: pImg20,
  },
  {
    Pimg: pImg21,
  },
  {
    Pimg: pImg22,
  },
  {
    Pimg: pImg23,
  },
  {
    Pimg: pImg24,
  },
  {
    Pimg: pImg25,
  },
  {
    Pimg: pImg26,
  },
  {
    Pimg: pImg27,
  },
  {
    Pimg: pImg42,
  },
  {
    Pimg: pImg45
  },
  {
    Pimg: pImg28,
  },
  {
    Pimg: pImg29,
  },
  {
    Pimg: pImg46,
  },
  {
    Pimg: pImg31,
  },
  {
    Pimg: pImg35,
  },
  {
    Pimg: pImg36,
  },
  {
    Pimg: pImg37,
  },
  {
    Pimg: pImg38,
  },
  {
    Pimg: pImg39,
  },
];

const Gallery = (props) => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"Captured Moments"} />
      <section
        className={`wpo-portfolio-section section-padding ${props.pClass}`}
        id="gallery"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="container">
          <div className="sortable-gallery">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-grids gallery-container clearfix">
                  {Portfolios.map((portfolio, pitem) => (
                    <div className="grid" key={pitem}>
                      <div className="img-holder">
                        <ReactFancyBox
                          thumbnail={portfolio.Pimg}
                          image={portfolio.Pimg}
                        />
                      </div>
                    </div>
                  ))}
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

export default Gallery;
