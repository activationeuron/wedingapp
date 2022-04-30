import React, { Fragment } from 'react';
import Navbar2 from "../../components/Navbar2";
import PageTitle from "../../components/pagetitle";
import pImg1 from "../../images/gallery/gallery-1.png";
import pImg2 from "../../images/gallery/gallery-2.png";
import pImg3 from "../../images/gallery/gallery-3.png";
import pImg4 from "../../images/gallery/gallery-4.png";
import pImg5 from "../../images/gallery/gallery-5.png";
import pImg6 from "../../images/gallery/gallery-6.png";
import pImg7 from "../../images/gallery/gallery-7.png";
import pImg8 from "../../images/gallery/gallery-8.png";
import pImg9 from "../../images/gallery/gallery-9.png";
import pImg10 from "../../images/gallery/gallery-10.png";
import pImg11 from "../../images/gallery/gallery-11.png";
import pImg12 from "../../images/gallery/gallery-12.png";
import pImg13 from "../../images/gallery/gallery-13.png";
import pImg14 from "../../images/gallery/gallery-14.png";
import pImg15 from "../../images/gallery/gallery-15.png";
import pImg16 from "../../images/gallery/gallery-16.png";
import pImg17 from "../../images/gallery/gallery-17.png";
import pImg18 from "../../images/gallery/gallery-18.png";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";
import Modal from '../ModalPopUp/Modal';

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
    Pimg: pImg6,
  },
  {
    Pimg: pImg7,
  },
  {
    Pimg: pImg8,
  },
  {
    Pimg: pImg9,
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
    Pimg: pImg14,
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
]; 

const Gallery = (props) => {
    return (
      <Fragment>
        <Navbar2 />
        <PageTitle pageTitle={"Captured Moments"} />
        <section
          className={`wpo-portfolio-section section-padding ${props.pClass}`}
          id="gallery"
          style={{ paddingTop: "60px", paddingBottom: '60px' }}
        >
          <div className="container">
            <div className="sortable-gallery">
              <div className="row">
                <div className="col-lg-12">
                  <div className="portfolio-grids gallery-container clearfix">
                    {Portfolios.map((portfolio, pitem) => (
                      <div className="grid"  key={pitem}>
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
                <div className='col-lg-12'>
<Modal/>
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