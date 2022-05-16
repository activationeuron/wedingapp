import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import React from 'react';

function Support({ support, handleClose }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [text, setText] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://172.105.156.217:8000/api/support`,
      { name, phone, text }
    );
    if (response.data.status) {
      alert('Support Ticket Created!');
      handleClose(false);
    }
  };
  return (
    <div style={{"paddingBottom":"20px"}}>
      <Dialog
        open={support}
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
                  <h4
                    id='form-heading'
                    style={{ fontWeight: '700', color: '#A3888C' }}
                  >
                    Support
                  </h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ paddingTop: '10px' }}>
                    <p style={{ marginBottom: '1px', marginTop: '4px' }}>
                      Name
                    </p>
                    <input
                      type='text'
                      placeholder='Guest Name'
                      className='form-control'
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div style={{ paddingTop: '10px' }}>
                    <p style={{ marginBottom: '1px', marginTop: '4px' }}>
                      Phone Number
                    </p>
                    <input
                      type='text'
                      placeholder='Phone Number'
                      className='form-control'
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div style={{ paddingTop: '10px' }}>
                    <p style={{ marginBottom: '1px', marginTop: '4px' }}>
                      Description
                    </p>
                    <input
                      column='5'
                      type='text'
                      placeholder='Description'
                      className='form-control'
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='btn btn-default text-center'
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      background: '#A3888C',
                      marginTop: '10px',
                    }}
                  >
                    submit
                  </button>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Support;
