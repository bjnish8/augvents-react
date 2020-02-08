import React from 'react';
import myvideo from '../Live-Music.mp4'

const AugVideo = () => {
    return (
        <video className="myVideo" autoplay="autoplay" muted loop>
            <source src={myvideo} type="video/mp4" />
        </video>
    );
}

export default AugVideo