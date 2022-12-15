import React from 'react'
import "./navbar.css"
import { useState } from "react"

function Navbar() {

    const [showLinks, setShowlinks] = useState(false)

    const handleShowLinks = () => {
        setShowlinks(!showLinks)
    }
    return (
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className='navbar_logo'>Linconnu</div>
            <ul className='navbar_links'>
                <li className='navbar_item slideInDown-1'>
                    <a href='/' className='navbar_link'>Bio</a>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <a href='/' className='navbar_link'>Cours</a>
                </li>
                <li className='navbar_item slideInDown-3'>
                    <a href='/' className='navbar_link'>Prestation</a>
                </li>
                <li className='navbar_item slideInDown-4'>
                    <a href='/' className='navbar_link'>Contact</a>
                </li>
            </ul>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className='burger-bar'></span>
            </button>
        </div>
    )
}

export default Navbar