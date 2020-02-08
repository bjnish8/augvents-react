import React from 'react';
import './styles/intro.augvents.scss'
import augventsLogo from '../augventsLogo.png'
import AugButton from './minicomponents/augvents.button'

const Intro = () => {
    const text = "Book Events"
    return (
        <div className="intro">
            <div className="flex-center">
                <img src={augventsLogo} alt="logo"></img>
                <p> building community, connecting people and events </p>
                <AugButton text={text}/>
            </div>
        </div>
    );
}

export default Intro;