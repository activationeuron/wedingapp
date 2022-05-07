/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment } from "react";
import { Button, Dialog, DialogTitle, Grid } from "@material-ui/core";
import '../SignUpPage/style.scss';
import './style.css';
import Simg from "../../images/section-title.png";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const RSVPForm = ({ maxWidth, button, buttonClass }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Button
        className="MuiButtonBase-root MuiButton-root MuiButton-text btn undefined find-rsvp"
        style={{ fontFamily: "Lato, sans-serif", fontWeight: "700" }}
        onClick={handleClickOpen}
      >
        {button}
        FIND RSVP
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
      >
        <DialogTitle className="rsvp-modal-title">
          {handleClose ? (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon className="close-btn" />
            </IconButton>
          ) : null}
        </DialogTitle>
        <div className="rsvp-modal">
          <div className="d-flex">
            <Grid
              className="loginWrapper"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                minHeight: "max-content",
              }}
            >
              <Grid className="loginForm form-1" style={{ maxWidth: "100%", paddingTop: '30px' }}>
                <div
                  className="wpo-section-title"
                  style={{ paddingBottom: "0px" }}
                >
                  <h2
                    id="form-heading"
                    style={{ fontWeight: "700", color: "#A3888C" }}
                  >
                    Is this you?
                  </h2>
                </div>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                      <label for="guests" style={{ fontStyle: "italic" }}>
                        Your Name
                      </label>
                      <div>
                        <input
                          type="text"
                          placeholder="Guest Name"
                          className="form-control"
                        />
                      </div>
                      <Button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text btn undefined rsvp-submit-2"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        {button}
                        RSVP
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <div className="shape-img">
                  <i className="fi flaticon-honeycomb"></i>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="d-flex form-row-1">
            <Grid
              className="loginWrapper"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                minHeight: "max-content",
              }}
            >
              <Grid className="loginForm form-1" style={{ maxWidth: "100%" }}>
                <div
                  className="wpo-section-title"
                  style={{ paddingBottom: "0px" }}
                >
                  <h2
                    id="form-heading"
                    style={{ fontWeight: "700", color: "#A3888C" }}
                  >
                    Haldi Ceremony
                  </h2>
                </div>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                      <label for="guests" style={{ fontStyle: "italic" }}>
                        Select No. of Guests
                      </label>
                      <select className="form-control custom-class">
                        <option>Select No. of Guests</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <label
                        for="name"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontStyle: "italic",
                          marginTop: "15px",
                        }}
                      >
                        Are you going to attend the event?
                      </label>
                      <div className="select-option">
                        <div
                          className="d-flex yes-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="Yes" style={{ marginLeft: "10px" }}>
                            Yes
                          </label>
                        </div>
                        <div
                          className="d-flex no-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="No" style={{ marginLeft: "10px" }}>
                            No
                          </label>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </form>
                <div className="shape-img">
                  <i className="fi flaticon-honeycomb"></i>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="d-flex">
            <Grid
              className="loginWrapper"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                minHeight: "max-content",
              }}
            >
              <Grid className="loginForm form-2" style={{ maxWidth: "100%" }}>
                <div
                  className="wpo-section-title"
                  style={{ paddingBottom: "0px" }}
                >
                  <h2
                    className="mehndi"
                    id="form-heading"
                    style={{ fontWeight: "700", color: "#A3888C" }}
                  >
                    Mehndi/Sangeet Ceremony
                  </h2>
                </div>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                      <label for="guests" style={{ fontStyle: "italic" }}>
                        Select No. of Guests
                      </label>
                      <select className="form-control custom-class">
                        <option>Select No. of Guests</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <label
                        for="name"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontStyle: "italic",
                          marginTop: "15px",
                        }}
                      >
                        Are you going to attend the event?
                      </label>
                      <div className="select-option">
                        <div
                          className="d-flex yes-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="Yes" style={{ marginLeft: "10px" }}>
                            Yes
                          </label>
                        </div>
                        <div
                          className="d-flex no-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="No" style={{ marginLeft: "10px" }}>
                            No
                          </label>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </form>
                <div className="shape-img">
                  <i className="fi flaticon-honeycomb"></i>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="d-flex">
            <Grid
              className="loginWrapper"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                minHeight: "max-content",
              }}
            >
              <Grid className="loginForm form-3" style={{ maxWidth: "100%" }}>
                <div
                  className="wpo-section-title"
                  style={{ paddingBottom: "0px" }}
                >
                  <h2
                    id="form-heading"
                    style={{ fontWeight: "700", color: "#A3888C" }}
                  >
                    Marriage Ceremony
                  </h2>
                </div>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                      <label for="guests" style={{ fontStyle: "italic" }}>
                        Select No. of Guests
                      </label>
                      <select className="form-control custom-class">
                        <option>Select No. of Guests</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <label
                        for="name"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontStyle: "italic",
                          marginTop: "15px",
                        }}
                      >
                        Are you going to attend the event?
                      </label>
                      <div className="select-option">
                        <div
                          className="d-flex yes-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="Yes" style={{ marginLeft: "10px" }}>
                            Yes
                          </label>
                        </div>
                        <div
                          className="d-flex no-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="No" style={{ marginLeft: "10px" }}>
                            No
                          </label>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </form>
                <div className="shape-img">
                  <i className="fi flaticon-honeycomb"></i>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="d-flex">
            <Grid
              className="loginWrapper"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                minHeight: "max-content",
              }}
            >
              <Grid className="loginForm form-4" style={{ maxWidth: "100%" }}>
                <div
                  className="wpo-section-title"
                  style={{ paddingBottom: "0px" }}
                >
                  <h2
                    id="form-heading"
                    style={{ fontWeight: "700", color: "#A3888C" }}
                  >
                    Reception
                  </h2>
                </div>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                      <label for="guests" style={{ fontStyle: "italic" }}>
                        Select No. of Guests
                      </label>
                      <select className="form-control custom-class">
                        <option>Select No. of Guests</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <label
                        for="name"
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontStyle: "italic",
                          marginTop: "15px",
                        }}
                      >
                        Are you going to attend the event?
                      </label>
                      <div className="select-option">
                        <div
                          className="d-flex yes-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="Yes" style={{ marginLeft: "10px" }}>
                            Yes
                          </label>
                        </div>
                        <div
                          className="d-flex no-option align-items-center"
                          style={{ marginTop: "10px" }}
                        >
                          <input type="radio" />
                          <label for="No" style={{ marginLeft: "10px" }}>
                            No
                          </label>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </form>
                <div className="shape-img">
                  <i className="fi flaticon-honeycomb"></i>
                </div>
              </Grid>
            </Grid>
          </div>
          <Button
            className="MuiButtonBase-root MuiButton-root MuiButton-text btn undefined rsvp-submit"
            style={{ fontFamily: "Lato, sans-serif", fontWeight: "700" }}
          >
            {button}
            RSVP
          </Button>
        </div>
      </Dialog>
    </Fragment>
  );
};
export default RSVPForm;
