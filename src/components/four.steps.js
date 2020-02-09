import React from 'react';
import { Icon } from 'antd'
import Title from './minicomponents/augvents.title'
import './styles/four.steps.scss'
import Step from './minicomponents/step.augvents'

const Steps = () => {
    const params = {
        titleText: "4 steps to get started"
    }
    return (
        <div className="steps">
            <Title {...{ params }} />
            <div className="content">
                <div className="level">
                    <Step params={{
                        index: "01",
                        title: "sign up",
                        icon: "mobile",
                        content: "Enter your name, email and phone number. "
                    }} />

                    <Step params={{
                        index: "02",
                        title: "pick plan",
                        icon: "edit",
                        content: "Select one of three plans. Your selected plan can be changed at a later date."
                    }} />
                </div>
                <div className="level">
                    <Step params={{
                        index: "03",
                        title: "book event",
                        icon: "check-square",
                        content: "Provide the basic information about your event."
                    }} />

                    <Step params={{
                        index: "04",
                        title: "go live",
                        icon: "check",
                        content: "Once the information has been entered and submitted, the event is ready to go live. The AUGVENTS app will find it. "
                    }} />
                </div>
            </div>
        </div>
    );
}

export default Steps;