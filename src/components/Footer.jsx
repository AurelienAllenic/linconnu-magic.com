import React from 'react'
import { Footer, Icons, LinkIcon } from "../utils/style/Footer"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { TbBrandTiktok } from "react-icons/tb"

function FooterSocials() {
    return (
        <>
            <Footer>
                <Icons>
                    <LinkIcon href='https://www.instagram.com/aurelienlinconnu/?hl=fr' target="_blank"><AiOutlineInstagram /></LinkIcon>
                    <LinkIcon href='https://www.youtube.com/@linconnu2816' target="_blank"><AiOutlineYoutube /></LinkIcon>
                    <LinkIcon href='https://www.tiktok.com/@aurelienlinconnu?_t=8XxL6NAGKhC&_r=1' target="_blank"><TbBrandTiktok /></LinkIcon>
                </Icons>
            </Footer>
        </>
    )
}

export default FooterSocials