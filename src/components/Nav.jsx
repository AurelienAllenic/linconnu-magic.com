import React, { useState, useEffect } from 'react'
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
            </NavShape>
        </>
    )
}

export default Nav