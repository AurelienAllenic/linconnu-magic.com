import React from 'react'
import { ImageContact } from "../utils/style/contact"
import FormContact from './contactComponents/FormContact'
import InfosContact from './contactComponents/InfosContact'

function Contact() {
    return (
        <>
            <section id="contact">
                <ImageContact>
                    <FormContact />
                    <InfosContact />
                </ImageContact>
            </section>
        </>
    )
}

export default Contact