import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2";
import Simg from "../../images/section-title.png";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";
import RSVPForm from "./rsvp-form";

const RSVPPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <section className={`wpo-event-section section-padding`} id="events">
        <div className="container">
          <div className="wpo-section-title" style={{ paddingBottom: "0px" }}>
            <div className="section-title-img">
              <img src={Simg} alt="" />
            </div>
            <h2 style={{ fontWeight: "700", color: "#A3888C" }}>RSVP</h2>
            {/* <div
              className="wpo-event-text"
              style={{ marginTop: "30px", fontFamily: "Lato, sans-serif" }}
            >
              <RSVPForm />
            </div> */}
          </div>
          <div className="wpo-event-wrap">
            <div className="row">
              <div className="rsvp-container">
                <div className="form-rsvp">
                  <h3>YOU'RE INVITED</h3>
                  <div className="underline"></div>
                  <form className="fill-form">
                    <h5 style={{ fontStyle: "italic" }}>
                      Enter your mobile number
                    </h5>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                    />
                    <RSVPForm />
                  </form>
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

export default RSVPPage;
