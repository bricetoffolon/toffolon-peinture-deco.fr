export interface imageContent {
    imageUrl: string,
    imageAlt: string
};

export interface service {
    id: number;
    title: string;
    description: string;
    image: string;
    callToAction: string;
};

export const servicesContent: service[] = [
    {
        id: 0,
        title: 'Ravalement',
        description:
            " Nous fournissons et posons les matériaux nécessaires à l'isolation thermique extérieure.\n    " +
            'En premier lieu, nous plaquons un isolant, recouvert par un enduit armé, ceci protège votre bâtiment\n ' +
            "   et imperméabilise les façades. L'enduit décoratif représente la touche finale de la façade, tout en " +
            "isolant\n    les bâtiments. L'isolation permet d'alléger vos factures d'énergie, de bénéficier d'avanta" +
            'ges fiscaux\n    et de prétendre à des subventions. Pour cela, les matériaux doivent avoir les certific' +
            'ations ACERMI\n    et avis techniques spécifiques.',
        image: {
            imageUrl: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/ravalement.JPG',
            imageAlt: 'Ravalement de façade - Maison le Raincy'
        }, // Replace with the actual image path
        callToAction: 'Contactez-nous pour un devis',
    },
    {
        id: 1,
        title: 'Isolation Thermique Extérieure',
        description:
            " Nous fournissons et posons les matériaux nécessaires à l'isolation thermique extérieure.\n    " +
            'En premier lieu, nous plaquons un isolant, recouvert par un enduit armé, ceci protège votre bâtiment\n ' +
            "   et imperméabilise les façades. L'enduit décoratif représente la touche finale de la façade, tout en " +
            "isolant\n    les bâtiments. L'isolation permet d'alléger vos factures d'énergie, de bénéficier d'avanta" +
            'ges fiscaux\n    et de prétendre à des subventions. Pour cela, les matériaux doivent avoir les certific' +
            'ations ACERMI\n    et avis techniques spécifiques.',
        image: {
            imageUrl: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/isolation-thermique.jpg',
            imageAlt: 'Isolation thermique - Maison les Pavillons-sous-bois'
        },
        callToAction: 'Contactez-nous pour un devis',
    },
    {
        id: 2,
        title: 'Rénovation Extérieure & Intérieure',
        description:
            " Nous fournissons et posons les matériaux nécessaires à l'isolation thermique extérieure.\n    " +
            'En premier lieu, nous plaquons un isolant, recouvert par un enduit armé, ceci protège votre bâtiment\n ' +
            "   et imperméabilise les façades. L'enduit décoratif représente la touche finale de la façade, tout en " +
            "isolant\n    les bâtiments. L'isolation permet d'alléger vos factures d'énergie, de bénéficier d'avanta" +
            'ges fiscaux\n    et de prétendre à des subventions. Pour cela, les matériaux doivent avoir les certific' +
            'ations ACERMI\n    et avis techniques spécifiques.',
        image: {
            imageUrl: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/renovation-exte%CC%81rieur-inte%CC%81rieur.png',
            imageAlt: 'Rénovation Extérieur Château - Rénovation Intérieur Appartement Paris 16'
        },
        callToAction: 'Contactez-nous pour un devis',
    },
    {
        id: 3,
        title: 'Revêtements de sols',
        description:
            " Nous fournissons et posons les matériaux nécessaires à l'isolation thermique extérieure.\n    " +
            'En premier lieu, nous plaquons un isolant, recouvert par un enduit armé, ceci protège votre bâtiment\n ' +
            "   et imperméabilise les façades. L'enduit décoratif représente la touche finale de la façade, tout en " +
            "isolant\n    les bâtiments. L'isolation permet d'alléger vos factures d'énergie, de bénéficier d'avanta" +
            'ges fiscaux\n    et de prétendre à des subventions. Pour cela, les matériaux doivent avoir les certific' +
            'ations ACERMI\n    et avis techniques spécifiques.',
        image: {
            imageUrl: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/revetement-de-sols.jpeg', // Replace with the actual image path
            imageAlt: 'Revetement de sols commerce'
        },
        callToAction: 'Contactez-nous pour un devis',
    },
    {
        id: 4,
        title: 'Peinture',
        description:
            " Nous fournissons et posons les matériaux nécessaires à l'isolation thermique extérieure.\n    " +
            'En premier lieu, nous plaquons un isolant, recouvert par un enduit armé, ceci protège votre bâtiment\n ' +
            "   et imperméabilise les façades. L'enduit décoratif représente la touche finale de la façade, tout en " +
            "isolant\n    les bâtiments. L'isolation permet d'alléger vos factures d'énergie, de bénéficier d'avanta" +
            'ges fiscaux\n    et de prétendre à des subventions. Pour cela, les matériaux doivent avoir les certific' +
            'ations ACERMI\n    et avis techniques spécifiques.',
        image: {
            imageUrl: 'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/peinture.jpeg', // Replace with the actual image path
            imageAlt: 'Peinture Maison Batiment commercers ornements volets',
        },
        callToAction: 'Contactez-nous pour un devis',
    },
];
