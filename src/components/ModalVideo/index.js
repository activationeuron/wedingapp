import React from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
 
class VideoModal extends React.Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div>
        <ModalVideo
          custom
          url="https://demo.roundtechsquare.com/main_banner_v2.mp4%20%281080p%29.mp4"
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className="video-btn">
          <ul>
            <li>
              <button className="wrap" onClick={this.openModal}>
                <i className="fi flaticon-play" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default VideoModal;