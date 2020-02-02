import React from 'react'
import './styles/homepage.scss'
import myvideo from '../Live-Music.mp4'
import augventsLogo from '../augventsLogo.png'
import { Icon } from 'antd'

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
            <div className="steps">
                <div className="title">
                <p>4 steps to get started</p>
                <hr />
                    </div>
                <div className="row">
                    <div className="column">
                        <p className="step">01</p>
                        <Icon className="icon" type="mobile" />
                        <span> sign up </span>
                        <p className="plan-description"> Enter your name, email and phone number. </p>
                    </div>
                    <div className="column">
                        <p className="step"> 02</p>
                        <Icon className="icon" type="edit" />
                        <span> pick plan </span>
                        <p className="plan-description"> Select one of three plans. Your selected plan can
                            be changed at a later date.
                    </p>
                    </div>
                    <div className="column">
                        <p className="step"> 03 </p>
                        <Icon className="icon" type="check-square" />
                        <span> book event </span>
                        <p className="plan-description"> Provide the basic information about your event </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage