interface entrepriseInfo {
    title: string;
    paragraph: string;
}

const entrepriseInformation: entrepriseInfo[] = [
    {
        title: 'Une entreprise familiale',
        paragraph:
            'Issue d’une entreprise familiale créée en 1960, la SAS TOFFOLON, managée par Jean-Marc Toffolon ' +
            'depuis 1991, met toute son expérience au service des professionnels ' +
            'et des particuliers en Ile-de-France mais également en province pour les professionnels.',
    },
    {
        title: 'Savoir-faire',
        paragraph:
            'Notre savoir-faire se démontre par les conseils techniques d’aménagement que nous prodiguons ' +
            'à nos clients, mais également par la prise en charge des démarches administratives ' +
            'pour les travaux plus importants.',
    },
    {
        title: 'Artisanat',
        paragraph:
            'Inscrits auprès de la Chambre des Métiers et de l’Artisanat, ' +
            'nous proposons à notre clientèle des prestations de qualité, réalisées par une équipe de maîtres ouvriers ' +
            'et ouvriers qualifiés qui gèrent leurs chantiers de A à Z. En effet, nous mettons un point d’honneur à ' +
            'ce que chaque ouvrier soit dédié à un seul chantier à la fois.',
    },
];

export default entrepriseInformation;
