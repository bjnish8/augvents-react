import React from 'react'
import './styles/homepage.scss'
import myvideo from '../Live-Music.mp4'
import augventsLogo from '../augventsLogo.png'

const HomePage = () => {
    return (
        <div className="home">
            {/* <video autoplay muted loop id="myVideo">
                <source src={myvideo} type="video/mp4"/>
            </video> */}
            <div className="intro">
                <div className="logo column absolute-center">
                    <img style={{ margin: "200px 0px 10px" }} src={augventsLogo} alt="logo"></img>
                    <div style={{ margin: "0px 0px 130px" }}><p> building community, connecting people and events </p></div>
                    <button className="book-event"> book event </button>
                </div>
            </div>

            <div className="steps row">
                <div>
                    <p>01</p>
                </div>
                <div>
                    <p> 02</p>
                </div>
                <div>
                   <p> 03 </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage