import React, { Fragment } from 'react';
import Navbar2 from "../../components/Navbar2";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import timg1 from "../../images/team/img-1.jpg";

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
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={timg1} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Reema Khan</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Mobile No: 281-743-5161
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={timg1} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Mohsi Mohammed</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Mobile No: 818-825-3595
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={timg1} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Danyal Mohammed</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Mobile No: 714-614-8086
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <img src={timg1} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>Vimal Patel</h3>
                      <span style={{ fontFamily: "Lato, sans-serif" }}>
                        Mobile No: 424-409-9020
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
};

export default WeddingParty;