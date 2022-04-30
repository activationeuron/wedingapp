/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment } from "react";
import { Button, Dialog, Grid } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import '../SignUpPage/style.scss';
import './style.css';

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
        className="MuiButtonBase-root MuiButton-root MuiButton-text btn undefined"
        style={{ fontFamily: "Lato, sans-serif" }}
        onClick={handleClickOpen}
      >
        {button}
        RSVP Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid
          className="loginWrapper"
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            minHeight: "max-content",
          }}
        >
          <Grid className="loginForm" style={{ maxWidth: "100%" }}>
            <SectionTitle MainTitle={"RSVP"} />
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                  <label for="name" style={{ fontFamily: "Lato, sans-serif" }}>
                    Are you going to attend the event ?
                  </label>
                  <select className="form-control custom-class">
                    <option>Select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </Grid>
                <Grid item xs={12} style={{ paddingBottom: "0px" }}>
                  <label for="name" style={{ fontFamily: "Lato, sans-serif" }}>
                    Full Name
                  </label>
                  <input
                    className="form-control custom-class"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </Grid>
                <Grid item xs={12} style={{ paddingBottom: '0px' }}>
                  <label for="name" style={{ fontFamily: "Lato, sans-serif" }}>
                    Select No. of Guests
                  </label>
                  <select className="form-control custom-class">
                    <option>Select No. of Guests</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </Grid>
                <Grid item xs={12}>
                  <Grid className="formFooter">
                    <Button
                      fullWidth
                      className="cBtn cBtnLarge cBtnTheme"
                      type="submit"
                      style={{
                        fontFamily: "Lato, sans-serif",
                        fontWeight: "800",
                        backgroundColor: '#A3888C',
                        color: 'white',
                        marginTop: '0px'
                      }}
                    >
                      RSVP
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
            <div className="shape-img">
              <i className="fi flaticon-honeycomb"></i>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default RSVPForm;
