import React, {useState, useEffect} from 'react';
import './styles/intro.augvents.scss'
import augventsLogo from '../augventsLogo.png'
import AugButton from './minicomponents/augvents.button'

const Intro = () => {
    const params = {
        text: "Book Events",
    }
    const [introClass, setIntroClass] = useState("intro-hidden")
    useEffect(() => {
        setTimeout(() => {
            setIntroClass("intro-visible")
        }, 1200)
    }, [])
    return (
        <div className={"intro " + introClass}>
            <div className="flex-center">
                <img src={augventsLogo} alt="logo"></img>
                <p> building community, connecting people and events </p>
                <AugButton {...{params}}/>
            </div>
        </div>
    );
}

export default Intro;