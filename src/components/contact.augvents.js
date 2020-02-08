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
            <p className="address">ADDRESS:  500 LEHMAN AVE.  BOWLING GREEN, OH 43402-3089   |  INFO@AUGVENTS.COM</p>
            <div className="column subscribe">
                <p> Subscribe for updates and promotions </p>
                <Input placeholder="Email Address"></Input>
                <button>get updates </button>
            </div>
        </div>
    );
}

export default Contact;