import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationBar.css'
function NavigationBar() {
    return (
        <header className='header'>
            <nav>
                <ul className='list'>
                    <li><NavLink to={"/"}>home</NavLink></li>
                    <li><NavLink to={"feed"}>Feed</NavLink></li>
                    <li><NavLink to={"signup"}>signup</NavLink></li>
                    <li><NavLink to={"login"}>login</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar
