import React from 'react'
import FormContact from './contactComponents/FormContact'
import InfosContact from './contactComponents/InfosContact'
import { ContactDiv, FormAndCard } from "../utils/style/contact"
import { Parallax } from 'react-parallax';
import ContactIMG from "../assets/contact.webp"
import { MainTitle } from "../utils/style/bio"

function Contact() {
    return (
        <>
            <section id="contact">
                <Parallax className='img' bgImage={ContactIMG} strength={800}>
                    <MainTitle>Contact</MainTitle>
                    <ContactDiv>
                        <FormAndCard>
                            <FormContact />
                            <InfosContact />
                        </FormAndCard>
                    </ContactDiv>
                </Parallax>
            </section>
        </>
    )
}

export default Contact