import React from 'react'
import { ImageContact } from "../utils/style/contact"
import { MainTitle } from "../utils/style/bio"
import FormContact from './contactComponents/FormContact'
import InfosContact from './contactComponents/InfosContact'

function Contact() {

    return (
        <>
            <section id="contact">
                <ImageContact>
                    <MainTitle>Contact</MainTitle>
                    <FormContact />
                    <InfosContact />
                </ImageContact>
            </section>
        </>
    )
}

export default Contact