import React, { useState, useEffect } from 'react'
import { A, ASocials, Logo, LogoSection, WebsiteSections, Socials } from "../utils/style/Nav"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { TbBrandTiktok } from "react-icons/tb"
import "../index.css"

function Nav() {
    const [navbar, setNavbar] = useState(false)

    const changeBAckground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 64 && window.scrollY <= 950) {
            setNavbar(true)
        }
        else {
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