import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll"
import { A, ASocials, Logo, LogoSection, WebsiteSections, Socials, NavShape } from "../utils/style/Nav"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { TbBrandTiktok } from "react-icons/tb"
import "../index.css"

function Nav() {
    return (
        <>
            <NavShape>
                <LogoSection>
                    <Logo href='#bio'>Linconnu</Logo>
                </LogoSection>
                <WebsiteSections>
                    <A><Link to='bio' spy={true} smooth={true} offset={0} duration={500}>Bio</Link></A>
                    <A><Link to='cours' spy={true} smooth={true} offset={0} duration={500}>Cours</Link></A>
                    <A><Link to='prestation' spy={true} smooth={true} offset={0} duration={500}>Prestation</Link></A>
                    <A><Link to='contact' spy={true} smooth={true} offset={0} duration={500}>Contact</Link></A>
                </WebsiteSections>
                <Socials>
                    <ASocials href='https://www.instagram.com/aurelienlinconnu/?hl=fr' target="_blank"><AiOutlineInstagram /></ASocials>
                    <ASocials href='https://www.youtube.com/@linconnu2816' target="_blank"><AiOutlineYoutube /></ASocials>
                    <ASocials href='https://www.tiktok.com/@aurelienlinconnu?_t=8XxL6NAGKhC&_r=1' target="_blank"><TbBrandTiktok /></ASocials>
                </Socials>
            </NavShape>
        </>
    )
}

export default Nav