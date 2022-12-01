import React, { useState, useEffect } from 'react'
import { A, ASocials, Logo, LogoSection, WebsiteSections, Socials } from "../utils/style/Nav"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { TbBrandTiktok } from "react-icons/tb"
import "../index.css"

function Nav() {
    const [navbar, setNavbar] = useState(false)

    const changeBAckground = () => {
        console.log(window.scrollY)
        if ((window.scrollY >= 64 && window.scrollY <= 904) || (window.scrollY >= 1038 && window.scrollY <= 1935) || (window.scrollY >= 2150 && window.scrollY <= 3000)) {
            setNavbar(true)
        }
        else if ((window.scrollY >= 904 && window.scrollY <= 1935) || (window.scrollY >= 1905) || (window.scrollY <= 64)) {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBAckground)

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <LogoSection>
                    <Logo>Linconnu</Logo>
                </LogoSection>
                <WebsiteSections>
                    <A href='#bio'>Bio</A>
                    <A href='#cours'>Cours</A>
                    <A href='#prestation'>Prestation</A>
                    <A href='#contact'>Contact</A>
                </WebsiteSections>
                <Socials>
                    <ASocials><AiOutlineInstagram /></ASocials>
                    <ASocials><AiOutlineYoutube /></ASocials>
                    <ASocials><TbBrandTiktok /></ASocials>
                </Socials>
            </nav>
        </>
    )
}

export default Nav