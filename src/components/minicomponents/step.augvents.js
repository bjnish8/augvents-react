import React from 'react'
import './styles/step.augvents.scss'
import { Icon } from 'antd'

const Step = (props) => {
    return (
        <div className="step">
            <p className="index">{props.params.index}</p>
            <Icon className="icon" type={props.params.icon} />
            <span> {props.params.title} </span>
            <p className="plan-description">{props.params.content} </p>
        </div>
    );
}

export default Step;