import React from 'react'
import { NavShape, A, ASocials, Logo, LogoSection, WebsiteSections, Socials } from "../utils/style/Nav"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { TbBrandTiktok } from "react-icons/tb"

function Nav() {
    return (
        <>
            <NavShape>
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
            </NavShape>
        </>
    )
}

export default Nav