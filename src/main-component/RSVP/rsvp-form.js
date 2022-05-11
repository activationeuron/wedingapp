/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment, useEffect } from 'react';
import { Button, Dialog, DialogTitle, Grid } from '@material-ui/core';
import '../SignUpPage/style.scss';
import './style.css';
import Simg from '../../images/section-title.png';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const RSVPForm = ({ maxWidth, button, buttonClass }) => {
  const [open, setOpen] = React.useState(false);
  const [invitations, setInvitations] = React.useState([]);
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [rsvp, setRsvp] = React.useState({});
  async function handleClickOpen(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://172.105.156.217:8000/api/event/myevent/${phone}`
      );

      if (response.data && response.data.success) {
        setInvitations(response.data.data.events);
        setName(response.data.data.name);
        setOpen(true);
        localStorage.setItem('phone_NO', phone);
        localStorage.setItem('active', true);
      }
    } catch (error) {
      alert('Invitation Not Found!');
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleYes(event) {
    const rsvpCopi = {};
    rsvpCopi[event] = 0;
    setRsvp({ ...rsvp, ...rsvpCopi });
  }
  function handleNo(event) {
    const rsvpCopi = rsvp;
    delete rsvpCopi[event];
    console.log(rsvpCopi);
    setRsvp({ ...rsvp, ...rsvpCopi });
  }

  const guestCount = (yes) => {
    var a = {};
    a[yes.event] = yes.count;
    setRsvp({ ...rsvp, ...a });
  };

  const handleRsvp = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      'http://172.105.156.217:8000/api/event/rsvp',
      {
        ...{ name: name, phone: phone, events: rsvp },
      }
    );
    if (response.data.success) {
      alert(response.data.message);
    }
  };

  React.useEffect(() => {
    console.log(rsvp, 'REACT');
  }, [rsvp]);

  return (
    <Fragment>
      <h5 style={{ fontStyle: 'italic' }}>Enter your mobile number</h5>
      <form onSubmit={(e) => handleClickOpen(e)} className='rsvpform '>
        <div className=''>
          <PhoneInput country={'us'} onChange={(phone) => setPhone(phone)} />
        </div>

        <Button
          className='MuiButtonBase-root MuiButton-root MuiButton-text btn undefined find-rsvp'
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }}
          onClick={handleClickOpen}
        >
          {button}
          FIND RSVP
        </Button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        className='modalWrapper quickview-dialog'
      >
        <DialogTitle className='rsvp-modal-title'>
          {handleClose ? (
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon className='close-btn' />
            </IconButton>
          ) : null}
        </DialogTitle>
        <div className='rsvp-modal'>
          <div className='d-flex'>
            <Grid
              className='loginWrapper'
              style={{
                paddingTop: '0px',
                paddingBottom: '0px',
                minHeight: 'max-content',
              }}
            >
              <Grid
                className='loginForm form-1'
                style={{ maxWidth: '100%', paddingTop: '30px' }}
              >
                <div
                  className='wpo-section-title'
                  style={{ paddingBottom: '0px' }}
                >
                  <h2
                    id='form-heading'
                    style={{ fontWeight: '700', color: '#A3888C' }}
                  >
                    Is this you?
                  </h2>
                </div>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} style={{ paddingBottom: '0px' }}>
                      <label for='guests' style={{ fontStyle: 'italic' }}>
                        Your Name
                      </label>
                      <div>
                        <input
                          type='text'
                          placeholder='Guest Name'
                          className='form-control'
                          disabled
                          value={name}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </form>
                <div className='shape-img'>
                  <i className='fi flaticon-honeycomb'></i>
                </div>
              </Grid>
            </Grid>
          </div>
          {invitations &&
            invitations.map((invitation) => {
              console.log(invitation);
              return (
                <>
                  {parseInt(invitation.count) > 0 ? (
                    <div className='d-flex form-row-1'>
                      <Grid
                        className='loginWrapper'
                        style={{
                          paddingTop: '0px',
                          paddingBottom: '0px',
                          minHeight: 'max-content',
                        }}
                      >
                        <Grid
                          className='loginForm form-1'
                          style={{ maxWidth: '100%' }}
                        >
                          <div
                            className='wpo-section-title'
                            style={{ paddingBottom: '0px' }}
                          >
                            <h2
                              id='form-heading'
                              style={{ fontWeight: '700', color: '#A3888C' }}
                            >
                              {invitation?.name.toLowerCase()} Ceremony
                            </h2>
                          </div>
                          <form>
                            <Grid container spacing={3}>
                              <Grid
                                item
                                xs={12}
                                style={{ paddingBottom: '0px' }}
                              >
                                <label
                                  for='guests'
                                  style={{ fontStyle: 'italic' }}
                                >
                                  Select No. of Guests
                                </label>

                                <select
                                  value={
                                    rsvp[invitation.name]
                                      ? parseInt(rsvp[invitation.name])
                                      : 0
                                  }
                                  className='form-control custom-class'
                                  onChange={(e) =>
                                    guestCount({
                                      count: e.target.value,
                                      event: invitation.name,
                                    })
                                  }
                                >
                                  <option value={0}>
                                    Select No. of Guests
                                  </option>
                                  {Array.from(
                                    Array(parseInt(invitation.count) + 1).keys()
                                  ).map((val) =>
                                    val !== 0 ? (
                                      <option key={val} value={val}>
                                        {val}
                                      </option>
                                    ) : (
                                      ''
                                    )
                                  )}
                                </select>
                                <label
                                  for='name'
                                  style={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontStyle: 'italic',
                                    marginTop: '15px',
                                  }}
                                >
                                  Are you going to attend the event?
                                </label>
                                <div className='select-option'>
                                  <div
                                    className='d-flex yes-option align-items-center'
                                    style={{ marginTop: '10px' }}
                                    onClick={() => handleYes(invitation.name)}
                                  >
                                    <input
                                      type='radio'
                                      name='a'
                                      checked={
                                        rsvp[invitation.name] >= 0
                                          ? true
                                          : false
                                      }
                                    />

                                    <label
                                      for='Yes'
                                      style={{ marginLeft: '10px' }}
                                    >
                                      Yes
                                    </label>
                                  </div>
                                  <div
                                    className='d-flex no-option align-items-center'
                                    style={{ marginTop: '10px' }}
                                    onClick={() => handleNo(invitation.name)}
                                  >
                                    <input type='radio' name='a' />
                                    <label
                                      for='No'
                                      style={{ marginLeft: '10px' }}
                                    >
                                      No
                                    </label>
                                  </div>
                                </div>
                              </Grid>
                            </Grid>
                          </form>
                          <div className='shape-img'>
                            <i className='fi flaticon-honeycomb'></i>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  ) : (
                    ''
                  )}
                </>
              );
            })}

          <Button
            className='MuiButtonBase-root MuiButton-root MuiButton-text btn undefined rsvp-submit'
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }}
            onClick={(e) => handleRsvp(e)}
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
