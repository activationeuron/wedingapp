import React, { Fragment } from 'react';
import Navbar2 from "../../components/Navbar2";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import reemaKhan from '../../images/reema-khan-photo.png';
import danyalMohammed from '../../images/danyal-mohammed-photo.png'
import danyalMohammedOne from "../../images/danyal-mohammed-photo-2.png";
import maternalGrandfather from "../../images/maternal-grandfather.jpeg";
import maternalGrandmother from "../../images/maternal-grandmother.jpg";
import paternalGrandmother from "../../images/paternal-grandmother.png";
import mohsiMohammed from "../../images/mohsi-mohammed.png";
import timg1 from "../../images/team/img-1.jpg";
import Simg from "../../images/section-title.png";

const WeddingParty = () => {
    return (
      <Fragment>
        <Navbar2 />
        <PageTitle pageTitle={"Wedding Party"} pagesub={"Planners"} />
        <section
          className="wpo-team-section section-padding"
          style={{ paddingTop: "60px" }}
        >
          <div className="container">
            <div className="wpo-team-wrap">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={danyalMohammed} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Danyal Mohammed</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Brother
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={mohsiMohammed} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Mohsi Mohammed</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Father
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={reemaKhan} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Reema Khan</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Mother
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={timg1} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Mohammed Abdul Mohi</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Paternal Grandfather
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={paternalGrandmother} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Azra sultana Mohi</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Paternal Grandmother
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={maternalGrandfather} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Maruthi Biranthbail</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Maternal Grandfather
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={maternalGrandmother} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Bhanu Biranthbail</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Maternal Grandmother
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{ justifyContent: "center" }}></div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
};

export default WeddingParty;