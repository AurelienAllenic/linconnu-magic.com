import React from 'react'
import { CardContact, ContentContactCard } from "../../utils/style/contact"
import { Important } from "../../utils/style/prestation"
import { PostScriptum } from "../../utils/style/Cours"
function InfosContact() {
    return (
        <>
            <CardContact>
                <ContentContactCard>Qu'il s'agisse d'un <Important>cours</Important> ou d'une <Important>prestation</Important>, veuillez renseigner votre <Important>nom, prénom</Important>, et n'hésitez pas à donner des <Important>informations</Important> concernant l'objet de votre demande.</ContentContactCard>
                <PostScriptum>Linconnu ne manquera pas de vous recontacter dans les plus brefs délais</PostScriptum>
            </CardContact>
        </>
    )
}

export default InfosContact