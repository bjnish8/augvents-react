import React from 'react'
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