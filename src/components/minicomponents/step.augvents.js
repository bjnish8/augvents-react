import React from 'react'
import './styles/step.augvents.scss'
import { Icon } from 'antd'

const Step = (props) => {
    return (
        <div className="step">
            <span className="index">{props.params.index}</span>
            <Icon className="icon" type={props.params.icon} />
            <span className="title"> {props.params.title} </span>
            <span className="plan-description">{props.params.content} </span>
        </div>
    );
}

export default Step;