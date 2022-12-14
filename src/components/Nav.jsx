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
            <Link className='navbar_logo' to='home' spy={true} smooth={true} offset={0} duration={800}>Linconnu</Link>
            <ul className='navbar_links'>
                <li className='navbar_item slideInDown-1'>
                    <Link className='navbar_logo link' to='home' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Accueil</Link>
                </li>
                <li className='navbar_item slideInDown-1'>
                    <Link className='navbar_logo link' to='bio' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Bio</Link>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <Link className='navbar_logo link' to='cours' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Cours</Link>
                </li>
                <li className='navbar_item slideInDown-3'>
                    <Link className='navbar_logo link' to='prestation' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Prestation</Link>
                </li>
                <li className='navbar_item slideInDown-4'>
                    <Link className='navbar_logo link' to='contact' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Contact</Link>
                </li>
            </ul>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className='burger-bar'></span>
            </button>
        </div>
    )
}

export default Navbar