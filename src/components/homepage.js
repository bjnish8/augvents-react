import React, { useState } from 'react'
import './styles/homepage.scss'
import ImageSlider from './image.slider'
import { Input } from 'antd'
import Intro from './intro.augvents'
import AugVideo from './video'
import Steps from './four.steps'
import About from './about.augvents'
import Plans from './plans.augvents'
import Contact from './contact.augvents'

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
                <Contact />
            </div>
        </div>
    )
}

export default HomePage