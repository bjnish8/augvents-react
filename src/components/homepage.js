import React, { useState } from 'react'
import './styles/homepage.scss'
import myvideo from '../Live-Music.mp4'
import augventsLogo from '../augventsLogo.png'
import marble from '../marble.jpg'
import ImageSlider from './image.slider'
import { Icon } from 'antd'

const HomePage = () => {

    const focusBorders = { border: "3px solid rgb(79, 181, 184)", borderRadius: "5px" }
    const [border, setBorder] = useState({})
    const highlightBlock = (index) => {
        if (index === 1) {
            setBorder({ block1: focusBorders })
        } else if (index === 2) {
            setBorder({ block2: focusBorders })
        } else {
            setBorder({ block3: focusBorders })
        }
    }
    return (
        <div>
            <video autoplay="autoplay" muted loop className="myVideo">
                <source src={myvideo} type="video/mp4" />
            </video>
            <div className="home">
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
                        <div className="column">
                            <p className="step"> 04 </p>
                            <Icon className="icon" type="check" />
                            <span> go live </span>
                            <p className="plan-description"> Once the information has been entered and submitted,
                        the event is ready to go live. The AUGVENTS app will find it. </p>
                        </div>
                    </div>
                </div>
                <div className="about" style={{ backgroundImage: `url(${marble})` }}>
                    <div className="title">
                        <p> about </p>
                        <hr />
                    </div>
                    <div className="about-content">
                        <p><b>augvents</b> is a social technology company supporting creative places and public place-making.  </p>

                        <p>The company's technology integrates advertising of events with improved awareness of local activities and the encouragement to participate.</p>

                        <p><b>augvents</b> assists in building healthy, functional, and productive localities through place-making and enhancement of the individual's
                        sense of community by their increased participation in events. </p>
                    </div>
                </div>
                <div className="plans column">
                    <div className="title">
                        <p> 3 plans to choose from  </p>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="column plan-block" style={border.block1} onClick={() => highlightBlock(1)}>
                            <p className="step">pay as you go</p>
                            <img src="https://cdn.stumagz.com/images/5739ae428cf7bstryimg"></img>
                            <span> $8 / 1 Event </span>
                            <p className="plan-description"> Easy and inexpensive way to get the word out about your pop up event. </p>
                        </div>
                        <div className="column plan-block" style={border.block2} onClick={() => highlightBlock(2)}>
                            <p className="step"> premium</p>
                            <img src="https://cdn.stumagz.com/images/5739ae428cf7bstryimg"></img>
                            <span>  $65 / 10 Events  </span>
                            <p className="plan-description"> Planning on hosting a series of musical or art event?
                             This is the right plan for you!
                    </p>
                        </div>
                        <div className="column plan-block" style={border.block3} onClick={() => highlightBlock(3)}>
                            <p className="step"> enterprise </p>
                            <img src="https://cdn.stumagz.com/images/5739ae428cf7bstryimg"></img>
                            <span> $250 / 50 Events  </span>
                            <p className="plan-description"> If booking acts many nights of each week is your responsiblity then you
                        will want the simpolicity and low-cost of the enterprise plan. </p>
                        </div>

                    </div>
                    <button className="book-event" style={{ width: "140px", height: "43px", margin: "70px 0px 0px" }}> next </button>
                </div>
                <div className="slider">
                    <ImageSlider />

                </div>
            </div>

        </div>

    )
}

export default HomePage