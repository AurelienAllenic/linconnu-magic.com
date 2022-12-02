import React from 'react'
import { ImageCours, BorderClass, MainPhraseClass, Ul, Li, SecondTextClass, ThirdTextClass, ContactClass, IconClass, ContainerLogoAndClass, PostScriptum } from "../utils/style/Cours"
import { MainTitle } from "../utils/style/bio"
import { BsFillSuitSpadeFill } from "react-icons/bs"
import { GiTwoCoins, GiCube, GiRing } from "react-icons/gi"
import { SpanArrow2 } from "../utils/style/general"
import { AiOutlineArrowDown } from "react-icons/ai"

function Cours() {
    return (
        <>
            <section id="cours">
                <ImageCours >
                    <MainTitle>Cours</MainTitle>
                    <BorderClass>
                        <MainPhraseClass>Linconnu vous propose des cours pouvant porter sur différents objets :</MainPhraseClass>
                        <Ul>
                            <ContainerLogoAndClass><IconClass><BsFillSuitSpadeFill /></IconClass><Li>Cartes</Li></ContainerLogoAndClass>
                            <ContainerLogoAndClass><IconClass><GiTwoCoins /></IconClass><Li>Pièces</Li></ContainerLogoAndClass>
                            <ContainerLogoAndClass><IconClass><GiRing /></IconClass><Li>Bagues</Li></ContainerLogoAndClass>
                            <ContainerLogoAndClass><IconClass><GiCube /></IconClass><Li>Rubik's Cube</Li></ContainerLogoAndClass>
                        </Ul>
                        <SecondTextClass>Qu'il s'agisse de scène ou de Close-Up, Linconnu pourra vous proposer des cours adaptés à vos besoins et envies</SecondTextClass>
                        <ThirdTextClass>Les tarifs des cours varient en fonction du temps et coût de déplacement, n'hésitez pas à <ContactClass href="#contact">contacter Linconnu</ContactClass> pour plus d'informations</ThirdTextClass>
                        <PostScriptum>( Veuillez préciser votre nom, prénom, lieu désiré pour la prise du cours, ainsi que vos disponibilités )</PostScriptum>
                    </BorderClass>
                    <SpanArrow2 a href="#prestation"><AiOutlineArrowDown /></SpanArrow2>
                </ImageCours>
            </section>
        </>
    )
}

export default Cours