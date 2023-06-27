import React from "react";

export function EnterpriseInformations(): React.JSX.Element {
    return (
        <>
            <p className="has-line-data" data-line-start="0" data-line-end="1">Issue d’une entreprise familiale créée en
                1960, la <strong>SAS TOFFOLON</strong>, managée par <strong>Jean-Marc
                    Toffolon</strong> depuis <strong>1991</strong>, met toute son expérience au service des professionnels
                et des particuliers en <strong>Ile-de-France</strong> mais également en <strong>province pour les
                    professionnels</strong>.</p>
            <p className="has-line-data" data-line-start="2" data-line-end="3">Notre savoir-faire se démontre par les
                conseils techniques d’aménagement que nous prodiguons à nos clients, mais également par la prise en charge
                des démarches administratives pour les travaux plus importants. Inscrits auprès de la <strong>Chambre des
                    Métiers et de l’Artisanat</strong>, nous proposons à notre clientèle des prestations de qualité,
                réalisées par une équipe de <strong>maîtres ouvriers</strong> et <strong>ouvriers qualifiés</strong> qui
                gèrent leurs chantiers de A à Z. En effet, nous mettons un point d’honneur à ce que <strong>chaque ouvrier
                    soit dédié à un seul chantier à la fois</strong>.</p>
            <p className="has-line-data" data-line-start="4" data-line-end="5">Nos devis, dont le chiffrage est estimé avec
                le plus grand soin sont <strong>gratuits</strong>.</p>
        </>
    );
}

export function EnterpriseCatchPhrase(): React.JSX.Element {
    return (
        <>
            <p className="has-line-data" data-line-start="0" data-line-end="3">
                CONFIEZ-NOUS VOS TRAVAUX EXTÉRIEURS OU
                INTÉRIEURS.<br/>
                UNE SEULE ÉQUIPE VOUS EST DÉDIÉE TOUT AU LONG DE VOTRE CHANTIER:<br/>
                AUCUN CHANGEMENT, AUCUN ARRÊT DU CHANTIER</p>
        </>
    );
}

export function EnterpriseLabel(): React.JSX.Element {
    return (
        <>
            <h2>
                Votre chantier de <strong style={{
                color: 'brand.500'
            }}>A</strong> à <strong style={{
                color: 'brand.500'
            }}>Z</strong>
            </h2>
        </>
    );
}

export function EnterpriseTitle(): React.JSX.Element {
    return (
        <>
            <p>Depuis <strong style={{
                color: 'brand.500'
            }}>1960</strong></p>
        </>
    );
}