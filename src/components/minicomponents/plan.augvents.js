import React, { useState } from 'react';
import './styles/plan.augvents.scss'

const Plan = (props) => {
    const focusBorders = { border: "3px solid rgb(79, 181, 184)", borderRadius: "5px" }

    return (
        <div className="plan-block" style={props.border} onClick={props.onClick}>
            <div className="column">
                <p className="step">{props.params.title}</p>
                <img src={props.params.img}></img>
                <span> {props.params.price} </span>
            </div>
            <p className="plan-description"> {props.params.description} </p>
        </div>
    );
}

export default Plan;