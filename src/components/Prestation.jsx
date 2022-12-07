import React from 'react'
import { Link } from "react-scroll"
import { MainTitle } from '../utils/style/bio'
import { ImagePrestation, CardPrestation, MainTitleCard, ContentCard, Important } from "../utils/style/prestation"
import { PostScriptum, ContactClass } from "../utils/style/Cours"
import { AiOutlineArrowDown } from "react-icons/ai"
import { SpanArrow3 } from "../utils/style/general"

function Prestation() {
    return (
        <>
            <section id="prestation">
                <ImagePrestation>
                    <MainTitle>Prestation</MainTitle>
                    <CardPrestation>
                        <MainTitleCard>Linconnu vous propose des prestations de natures diverses :</MainTitleCard>
                        <ContentCard>Qu'il s'agisse de <Important>Scène</Important> ou de <Important>Close-Up</Important> (table en table), il est possible de réaliser une prestation en <Important>Ile-de-France</Important> de préférence.</ContentCard><ContentCard>Si elle a lieu aileurs, merci de le préciser afin d'étudier les modalités de l'évènement.</ContentCard>
                        <ContentCard>Bar-Mitzvah, Mariage, anniversaire ou toute autre cérémonie, il est possible de <ContactClass a href="#contact">réserver une soirée, une journée</ContactClass>.</ContentCard>
                        <PostScriptum>( Veuillez préciser votre nom, prénom, lieu, date et durée de la prestation, les tarifs varieront en fonction de ces critères )</PostScriptum>
                    </CardPrestation>
                    <SpanArrow3><Link to='contact' spy={true} smooth={true} offset={0} duration={500}><AiOutlineArrowDown /></Link></SpanArrow3>
                </ImagePrestation>
            </section>
        </>
    )
}

export default Prestation