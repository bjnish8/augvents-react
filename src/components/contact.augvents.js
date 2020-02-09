import React from 'react';
import { Input, Icon } from 'antd';
import Title from './minicomponents/augvents.title'
import './styles/contact.augvents.scss'

const Contact = () => {
    const params = {
        titleText: "contact us"
    }
    return (
        <div className="contact">
            <Title {...{ params }} />
            <div className="address">
                <div> <Icon className="icon" type="mail" /> info@augvents.com </div>
                <div>  <Icon className="icon" type="compass" /> 500 Lehman Ave. Bowling Green, OH 43402 </div>
            </div>
            <div className="column subscribe">
                <span> Subscribe for updates and promotions </span>
                <Input placeholder="Email Address"></Input>
                <button>get updates </button>
            </div>
        </div>
    );
}

export default Contact;