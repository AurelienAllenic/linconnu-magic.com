import React from 'react'
import { Link } from "react-scroll"
import { MainTitle, BioCard, P, CardInCenter } from "../utils/style/bio"
import { Parallax } from 'react-parallax';
import BioIMG from "../assets/bio.webp"

function Bio() {
    return (
        <>
            <section id="bio">
                <Parallax className='img' bgImage={BioIMG} strength={800}>
                    <MainTitle>Bio</MainTitle>
                    <CardInCenter>
                        <BioCard>
                            <P>Linconnu, aussi énigmatique que stupéfiant, issu d'une lignée millénaire de prestidigitateurs et tricheurs en tout genre vous propose ici son tout premier site web, créé par ses soins.<br /><br />
                                Formé dès sa jeunesse par ses proches, entraîné par un professeur particulier aux talents infinis et ce, durant de nombreuses années, Linconnu sort de l'ombre et vient offrir son savoir incommensurable au commun des moldus.
                            </P>
                            <P>
                                <br />Cours particuliers, Prestations magiques en tout genre, Linconnu manie tout aussi bien les cartes, que les pièces, balles en mousse, bagues, Rubik's Cube. <br />
                                Venez donc découvrir un univers étrange et qui semble pourtant... si réel.
                            </P>
                        </BioCard>
                    </CardInCenter>
                </Parallax>
            </section>
        </>
    )
}

export default Bio