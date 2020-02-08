import React, { useState } from 'react';
import './styles/plans.augvents.scss'
import Title from './minicomponents/augvents.title'
import AugButton from './minicomponents/augvents.button'
import Plan from './minicomponents/plan.augvents'

const Plans = () => {
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
    const params = {
        text: "next",
        titleText: "3 plans to choose from"
    }

    return (
        <div className="plans column">
            <Title {...{ params }} />
            <div className="row">
                <Plan
                    border={border.block1}
                    onClick={() => highlightBlock(1)} 
                    params={{
                        img: "https://www.iamsterdam.com/media/agenda/music/concert-nc.jpg",
                        title: "pay as you go",
                        price: "$8 / 1 Event",
                        description: "Easy and inexpensive way to get the word out about your pop up event."
                    }}/>
                <Plan
                    border={border.block2}
                    onClick={() => highlightBlock(2)}
                    params={{
                        img: "https://isthmus.com/downloads/37929/download/calendar-music-LowCzars.jpg?cb=9eb96b3b0a8144621ef22dafd690e139",
                        title: "premium",
                        price: "$65 / 10 events",
                        description: "Planning on hosting a series of musical or art event"
                    }} />
                <Plan
                    border={border.block3}
                    onClick={() => highlightBlock(3)} 
                    params={{
                        img: "https://cdn.stumagz.com/images/5739ae428cf7bstryimg",
                        title: "enterprise",
                        price:"$250 / 50 events",
                        description: "If booking acts many nights of each week is your repsonsibility \
                         then you will want the simplicity and low-cost of the enterprise plan"
                    }}/>
                {/* <div className="column plan-block" style={border.block1} onClick={() => highlightBlock(1)}>
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
                </div> */}
            </div>
            <AugButton {...{ params }} />

        </div>
    );
}

export default Plans;