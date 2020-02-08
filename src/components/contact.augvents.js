import React from 'react';
import { Input } from 'antd';
import './styles/contact.augvents.scss'

const Contact = () => {
    return (
        <div className="contact">
            <div className="title">
                <p> contact us </p>
            </div>
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