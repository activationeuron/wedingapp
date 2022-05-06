import React from 'react'
import { Dialog } from "@material-ui/core";
 
const VideoModal = () => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  } 
  return (
    <div>
      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={handleClickOpen}>
              <i className="fi flaticon-play" aria-hidden="true"></i>
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              className="modalWrapper quickview-dialog"
            >
              <div className="banner-video">
                <video autoPlay>
                  <source
                    src={require("../../images/banner.mp4")}
                    type="video/mp4"
                  />
                </video>
              </div>
            </Dialog>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VideoModal;