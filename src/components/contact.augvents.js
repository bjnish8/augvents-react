import React from 'react';
import { Input } from 'antd';
import Title from './minicomponents/augvents.title'
import './styles/contact.augvents.scss'

const Contact = () => { 
    const params = {
        titleText: "contact us"
    }
    return (
        <div className="contact">
            <Title {...{ params }} />
            <span className="address">Address:  500 Lehman Ave.  Bowling Green, OH 43402-3089   | info@augvents.com </span>
            <div className="column subscribe">
                <span> Subscribe for updates and promotions </span>
                <Input placeholder="Email Address"></Input>
                <button>get updates </button>
            </div>
        </div>
    );
}

export default Contact;