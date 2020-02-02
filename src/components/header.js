import React from 'react';
import './styles/header.scss'
import { Link } from 'react-router-dom'
import { Icon, Dropdown, Menu } from 'antd'

const Header = () => {
    const more = (
        <Menu>
            <Menu.Item className="menu-item">
                <a target="_blank" rel="noopener noreferrer" href="https://www.augvents.com/">
                    Create Event
            </a>
            </Menu.Item>
            <Menu.Item className="menu-item">
                <a target="_blank" rel="noopener noreferrer" href="https://www.augvents.com/">
                    List my Events
            </a>
            </Menu.Item>
            <Menu.Item className="menu-item">
                <a target="_blank" rel="noopener noreferrer" href="https://www.augvents.com/">
                    Upgrade Plan
            </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="header-block">
            <ul className="header links-list">
                <li>
                    Home
                </li>
                <li><Dropdown overlay={more}>
                    <a className="ant-dropdown-link" href="#">
                        More <Icon type="down" />
                    </a>
                </Dropdown>
                </li>
            </ul>
            <ul className="header links-list">
                <li> sign up </li>
                <li>  login </li>
            </ul>

        </div>
    );
}

export default Header;