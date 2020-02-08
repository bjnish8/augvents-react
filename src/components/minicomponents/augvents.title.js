import React from 'react';
import './styles/augvents.title.scss'

const Title = (props) => {
    return (
        <div className="title">
            <p>{props.params.titleText}</p>
            <hr />
        </div>
    );
}

export default Title;