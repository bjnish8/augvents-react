import React from 'react';
import { Icon } from 'antd'
import './styles/four.steps.scss'

const Steps = () => {
    return ( 
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
     );
}
 
export default Steps;