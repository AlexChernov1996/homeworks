import React from 'react'
import {NavLink} from "react-router-dom";
import './header.css'

function Header() {

    return (
        <ul>

            <li><NavLink to={'/pre-junior'}>Pre-Junior</NavLink></li>
            <li><NavLink to={'/junior'}>Junior</NavLink></li>
            <li><NavLink to={'/junior_plus'}>Junior+</NavLink></li>
            <div className={'menu'}>Menu</div>
        </ul>
    )
}

export default Header
