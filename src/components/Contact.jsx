import React from 'react'
import { ImageContact } from "../utils/style/contact"
import FormContact from './contactComponents/FormContact'
import InfosContact from './contactComponents/InfosContact'
import { ContactDiv } from "../utils/style/contact"

function Contact() {
    return (
        <>
            <section id="contact">
                <ImageContact>
                    <ContactDiv>
                        <FormContact />
                        <InfosContact />
                    </ContactDiv>
                </ImageContact>
            </section>
        </>
    )
}

export default Contact