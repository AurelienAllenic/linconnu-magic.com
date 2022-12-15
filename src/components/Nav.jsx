import React from 'react'
import "./navbar.css"
import { useState } from "react"
import { Link } from "react-scroll"

function Navbar() {

    const [showLinks, setShowlinks] = useState(false)

    const handleShowLinks = () => {
        setShowlinks(!showLinks)
    }
    return (
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <Link className='navbar_logo' to='bio' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Linconnu</Link>
            <ul className='navbar_links'>
                <li className='navbar_item slideInDown-1'>
                    <Link className='navbar_logo' to='bio' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Bio</Link>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <Link className='navbar_logo' to='cours' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Cours</Link>
                </li>
                <li className='navbar_item slideInDown-3'>
                    <Link className='navbar_logo' to='prestation' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Prestation</Link>
                </li>
                <li className='navbar_item slideInDown-4'>
                    <Link className='navbar_logo' to='contact' spy={true} smooth={true} offset={0} duration={500} onClick={handleShowLinks}>Contact</Link>
                </li>
            </ul>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className='burger-bar'></span>
            </button>
        </div>
    )
}

export default Navbar