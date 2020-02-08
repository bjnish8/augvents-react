import React from 'react';
import './styles/augvents.title.scss'

const Title = (props) => {
    return (
        <div className="title-container">
            <div className="title">
                <span>{props.params.titleText}</span>
            </div>
        </div>
    );
}

export default Title;