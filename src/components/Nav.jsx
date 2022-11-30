import React from 'react'
import { NavShape, A, ASocials, ALogo, LogoSection, WebsiteSections, Socials } from "../utils/style/Nav"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { TbBrandTiktok } from "react-icons/tb"

function Nav() {
    return (
        <>
            <NavShape>
                <LogoSection>
                    <ALogo>Linconnu</ALogo>
                </LogoSection>
                <WebsiteSections>
                    <A>Bio</A>
                    <A>Cours</A>
                    <A>Prestation</A>
                    <A>Contact</A>
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