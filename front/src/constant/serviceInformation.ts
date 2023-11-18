import React from "react";

import { FaCalendarCheck, FaCogs, FaFileContract, FaTruck } from 'react-icons/fa';

export interface step {
    title: string,
    label: string,
    Icon: React.ElementType
}

interface content {
    title: string,
    label: string,
    description: string,
    steps: step[]
}

export interface service {
    name: string,
    imageUrl: string,
    content?: content
}

export const serviceInformation: service[] =
    [
        {
            name: 'Ravalement',
            imageUrl:
                'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.28.55+-+A+16_9+format+full-frame+image+featuring+a+flat+vector+design+of+a+building+renovation%2C+centered+on+a+white+background.+The+design+is+simple+and+effic.png',
        },
        {
            name: 'Peinture',
            imageUrl:
                'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.32.09+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+simple+and+efficient+flat+vector+design+of+painting+work+on+a+building%2C+centered+i.png',
        },
        {
            name: 'Rénovation',
            imageUrl:
                'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.34.51+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+flat+vector+design+of+renovation+work+inside+a+building%2C+including+painting%2C+cente.png',
        },
        {
            name: 'Isolation thermique',
            imageUrl:
                'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.30.02+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+flat+vector+design+centered+on+building+thermal+insulation.+The+design+is+simple+a.png',
            content: {
                title: 'Isolation Thermique',
                label: 'Notre entreprise est certifiée QUALIBAT RGE depuis 2015 pour la réalisation des travaux d’isolation thermique exté- rieure sur les pavillons, im- meubles, magasins...',
                description: "Nous fournissons et posons les matériaux nécessaires à l’isolation thermique extérieure. En premier lieu, nous plaquons un isolant, recouvert par un enduit armé, ceci protège votre bâtiment et imperméabilise les façades. L’enduit décoratif représente la touche finale de la façade, tout en isolant les bâtiments.\nL’isolation permet d’alléger vos factures d’énergie, de bénéficier d’avantages fiscaux et de prétendre à des subventions. Pour cela les matériaux doivent avoir les certifications ACERMI et avis techniques spécifiques.",
                steps: [
                    {
                        title: 'Analyse',
                        label: 'Etude de votre projet & Conseil Techniques',
                        Icon: FaCogs,
                    },
                    {
                        title: 'Planification',
                        label: 'Remise des Document légaux & Planning prévisionnel',
                        Icon: FaCalendarCheck,
                    },
                    {
                        title: 'Lancement',
                        label: 'Commande des matériaux & Début du chantier',
                        Icon: FaTruck,
                    },
                    {
                        title: 'Finalisation',
                        label: 'Signature du PV de réception & Remise des garanti si nécessaires',
                        Icon: FaFileContract,
                    },
                ],
            },
        },
        {
            name: 'Revêtements de sols',
            imageUrl:
                'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.31.07+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+centered+flat+vector+design+of+a+building+floor+renovation.+The+design+is+simple+a.png',
        },
    ];
