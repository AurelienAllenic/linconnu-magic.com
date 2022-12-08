import React from 'react'
import { Link } from "react-scroll"
import { ImageBio, MainTitle, BioCardOne, BioCardTwo, P, DivCards, AlignCardsInCenter } from "../utils/style/bio"
import { AiOutlineArrowDown } from "react-icons/ai"
import { SpanArrow } from "../utils/style/general"

function Bio() {
    return (
        <>
            <section id="bio">
                <ImageBio>
                    <MainTitle>Bio</MainTitle>
                    <AlignCardsInCenter>
                        <DivCards>
                            <BioCardOne>
                                <P>Linconnu, aussi énigmatique que stupéfiant, issu d'une lignée millénaire de prestidigitateurs et tricheurs en tout genre vous propose ici son tout premier site web, créé par ses soins.<br /><br />
                                    Formé dès sa jeunesse par ses proches, entraîné par un professeur particulier aux talents infinis et ce, durant de nombreuses années, Linconnu sort de l'ombre et vient offrir son savoir incommensurable au commun des moldus.
                                </P>
                            </BioCardOne>
                            <BioCardTwo>
                                <P>
                                    Cours particuliers, Prestations magiques en tout genre, Linconnu manie tout aussi bien les cartes, que les pièces, balles en mousse, bagues, Rubik's Cube. <br /><br />Sa présence jusque là épisodique sur les réseaux est  terminée et désormais l'artiste est enfin sorti de son apprentissage méditatif et reclus du reste du monde.<br />
                                    Venez donc découvrir un univers étrange et qui semble pourtant... si réel.
                                </P>
                            </BioCardTwo>
                        </DivCards>
                    </AlignCardsInCenter>
                    <SpanArrow><Link to='cours' spy={true} smooth={true} offset={0} duration={500}><AiOutlineArrowDown /></Link></SpanArrow>
                </ImageBio>
            </section>
        </>
    )
}

export default Bio