import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2";
import SectionTitle from "../../components/SectionTitle";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";
import RSVPForm from "./rsvp-form";

const RSVPPage = (props) => {
  return (
    <Fragment>
      <Navbar2 />
      <section
        className={`wpo-event-section section-padding ${props.eClass}`}
        id="events"
      >
        <div className="container">
          <SectionTitle MainTitle={"RSVP"} />
          <div className="wpo-event-wrap">
            <div className="row">
              <div className="col col-lg-6 col-md-6 col-12">
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <video
                      autoPlay
                      loop
                      style={{ objectFit: "cover", width: "100%" }}
                    >
                      <source
                        src={require("../../images/haldi-ceremony.mp4")}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="wpo-event-text">
                    <h2 style={{ fontWeight: "700" }}>Haldi Ceremony</h2>
                    <ul>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        Saturday, 03 Sep, 2022
                      </li>
                      <li
                        style={{
                          fontFamily: "Lato, sans-serif",
                          marginBottom: "0px",
                        }}
                      >
                        Rey Fullerton CA 92833, USA
                      </li>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        <RSVPForm />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-12">
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <video
                      autoPlay
                      loop
                      style={{ objectFit: "cover", width: "100%" }}
                    >
                      <source
                        src={require("../../images/sangeet-ceremony.mp4")}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="wpo-event-text">
                    <h2 style={{ fontWeight: "900" }}>Sangeet Ceremony</h2>
                    <ul>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        Sunday, 04 Sep, 2022
                      </li>
                      <li
                        style={{
                          fontFamily: "Lato, sans-serif",
                          marginBottom: "0px",
                        }}
                      >
                        To Be Declared
                      </li>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        <RSVPForm />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-12">
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <video
                      width="400"
                      autoPlay
                      loop
                      style={{ objectFit: "cover", width: "100%" }}
                    >
                      <source
                        src={require("../../images/marriage-ceremony.mp4")}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="wpo-event-text">
                    <h2 style={{ fontWeight: "700" }}>Marriage Ceremony</h2>
                    <ul>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        Friday, 09 Sep, 2022
                      </li>
                      <li
                        style={{
                          fontFamily: "Lato, sans-serif",
                          marginBottom: "0px",
                        }}
                      >
                        Mount Prospect IL, USA
                      </li>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        <RSVPForm />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-12">
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <video
                      width="400"
                      autoPlay
                      loop
                      style={{ objectFit: "cover", width: "100%" }}
                    >
                      <source
                        src={require("../../images/reception.mp4")}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="wpo-event-text">
                    <h2 style={{ fontWeight: "700" }}>Reception</h2>
                    <ul>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        Friday, 16 Sep, 2022
                      </li>
                      <li
                        style={{
                          fontFamily: "Lato, sans-serif",
                          marginBottom: "0px",
                        }}
                      >
                        Villa Contempo Estate
                      </li>
                      <li style={{ fontFamily: "Lato, sans-serif" }}>
                        <RSVPForm />
                      </li>
                    </ul>
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

export default RSVPPage;
