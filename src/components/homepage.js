import React, { useState } from 'react'
import './styles/homepage.scss'
import ImageSlider from './image.slider'
import { Input } from 'antd'
import Intro from './intro.augvents'
import AugVideo from './video'
import Steps from './four.steps'
import About from './about.augvents'
import Plans from './plans.augvents'

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
            <AugVideo />
            <div className="home">
                <Intro />
                <Steps />
                <About />
                <Plans />
                <div className="slider">
                    <ImageSlider />
                </div>
                <div className="contact">
                    <div className="title">
                        <p> contact us </p>
                    </div>
                    <p className="address">ADDRESS:  500 LEHMAN AVE.  BOWLING GREEN, OH 43402-3089   |  INFO@AUGVENTS.COM</p>
                    <div className="column subscribe">
                        <p> Subscribe for updates and promotions </p>
                        <Input placeholder="Email Address"></Input>
                        <button>get updates </button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HomePage