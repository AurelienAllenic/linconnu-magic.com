import React from 'react'
import { ImageBio, MainTitle, BioCardOne, BioCardTwo, P } from "../utils/style/bio"

function Bio() {
    return (
        <>
            <section id="bio">
                <ImageBio>
                    <MainTitle>Bio</MainTitle>
                    <BioCardOne>
                        <P>Linconnu, aussi énigmatique que stupéfiant, issu d'une lignée millénaire de prestidigitateurs et tricheurs en tout genre vous propose ici son tout premier site web, créé par ses soins.<br /><br />
                            Formé dès sa jeunesse par ses proches, entraîné par un professeur particulier aux talentrs infinis et ce, durant de nombreuses années, Linconnu sort de l'ombre et vient offrir son savoir incommensurable au commun des moldus.
                        </P>
                    </BioCardOne>
                    <BioCardTwo>
                        <P>
                            Cours particuliers, Prestations magiques en tout genre, Linconnu manie tout aussi bien les cartes, que les pièces, balles en mousse, bagues, Rubik's Cube. <br /><br />Sa présence jusque là épisodique sur les réseaux est désormais terminée et l'artiste est enfin sorti de son apprentissage méditatif et reclus du reste du monde.<br />
                            Venez donc découvrir un univers étrange et qui semble pourtant... si réel.
                        </P>
                    </BioCardTwo>
                </ImageBio>
            </section>
        </>
    )
}

export default Bio