import React from 'react'
import VideoModal from '../ModalVideo'
import './style.css'

const VideoSection = (props) => {
    return(
        <section className="wpo-video-section" id='home-banner'>
            <VideoModal/>
        </section>
    )
}

export default VideoSection;