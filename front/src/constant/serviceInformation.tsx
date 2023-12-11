import React from 'react';

import {
    FaBroom,
    FaCalculator,
    FaCalendarCheck,
    FaCheckCircle,
    FaCogs,
    FaFileContract,
    FaFileInvoice,
    FaFileInvoiceDollar,
    FaHammer,
    FaLevelUpAlt,
    FaPaintRoller,
    FaPalette,
    FaPencilRuler,
    FaRegCompass,
    FaSearch,
    FaSearchPlus,
    FaStar,
    FaTasks,
    FaThumbsUp,
    FaTools,
    FaTruck,
    FaWrench,
} from 'react-icons/fa';

export interface step {
    title: string;
    label: string;
    Icon: React.ElementType;
}

interface content {
    title: string;
    label: string;
    description: string;
    steps: step[];
}

export interface service {
    id: number;
    name: string;
    imageUrl: string;
    content?: content;
}

export const serviceInformation: service[] = [
    {
        id: 0,
        name: 'Ravalement',
        imageUrl:
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.28.55+-+A+16_9+format+full-frame+image+featuring+a+flat+vector+design+of+a+building+renovation%2C+centered+on+a+white+background.+The+design+is+simple+and+effic.png',
        content: {
            title: 'Ravalement',
            label: 'Expert en ravalement de façades, QUALIBAT RGE depuis 2015, pour maisons, immeubles, commerces...',
            description:
                "Notre service de ravalement de façade inclut la préparation de la surface, le traitement des fissures, l'application de revêtements et peintures de protection. Ceci améliore non seulement l'aspect esthétique de votre bâtiment, mais contribue également à sa protection contre les éléments. Le ravalement de façade peut aussi aider à améliorer l'isolation thermique de votre bâtiment.\nEn choisissant notre service, vous bénéficiez de l'expertise d'une équipe certifiée, de matériaux de qualité et d'un résultat durable. En plus, nos travaux peuvent vous aider à réaliser des économies d'énergie et à accéder à des avantages fiscaux.",
            steps: [
                {
                    title: 'Consultation',
                    label: 'Evaluation de vos besoins & Proposition de solution personnalisée',
                    Icon: FaSearch,
                },
                {
                    title: 'Devis',
                    label: "Élaboration d'un devis détaillé & Transparent",
                    Icon: FaFileInvoiceDollar,
                },
                {
                    title: 'Préparation',
                    label: 'Préparation du site & Sécurisation du chantier',
                    Icon: FaTools,
                },
                {
                    title: 'Exécution',
                    label: 'Mise en œuvre des travaux & Suivi de qualité',
                    Icon: FaHammer,
                },
                {
                    title: 'Achèvement',
                    label: 'Nettoyage final & Inspection avec le client',
                    Icon: FaThumbsUp,
                },
            ],
        },
    },
    {
        id: 1,
        name: 'Peinture',
        imageUrl:
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.32.09+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+simple+and+efficient+flat+vector+design+of+painting+work+on+a+building%2C+centered+i.png',
        content: {
            title: 'Peinture',
            label: 'Service professionnel de peinture, QUALIBAT RGE depuis 2015, spécialisé en peinture intérieure et extérieure pour maisons, bureaux, et bâtiments commerciaux.',
            description:
                "Nous offrons un service complet de peinture, y compris la préparation des surfaces, l'application de peintures et revêtements de haute qualité, et les finitions décoratives. Nos services de peinture améliorent non seulement l'esthétique de votre propriété, mais protègent également vos surfaces contre les intempéries et l'usure. Nous utilisons des peintures écologiques et durables, et nos travaux peuvent contribuer à une meilleure isolation et efficacité énergétique de votre bâtiment.\nEn choisissant notre service, vous bénéficiez d'une expertise reconnue, d'un travail soigné, et d'un résultat esthétique et durable.",
            steps: [
                {
                    title: 'Consultation initiale',
                    label: 'Discussion des besoins du client & Sélection des couleurs',
                    Icon: FaPalette,
                },
                {
                    title: 'Devis',
                    label: "Établissement d'un devis clair et détaillé",
                    Icon: FaCalculator,
                },
                {
                    title: 'Préparation',
                    label: 'Nettoyage et préparation des surfaces à peindre',
                    Icon: FaBroom,
                },
                {
                    title: 'Application',
                    label: 'Application professionnelle de la peinture',
                    Icon: FaPaintRoller,
                },
                {
                    title: 'Finition',
                    label: 'Vérification de la qualité et retouches finales',
                    Icon: FaCheckCircle,
                },
                {
                    title: 'Finalisation',
                    label: 'Nettoyage post-peinture & Présentation finale au client',
                    Icon: FaStar,
                },
            ],
        },
    },
    {
        id: 2,
        name: 'Rénovation',
        imageUrl:
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.34.51+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+flat+vector+design+of+renovation+work+inside+a+building%2C+including+painting%2C+cente.png',
        content: {
            title: 'Rénovation',
            label: 'Spécialiste de la rénovation, QUALIBAT RGE depuis 2015, pour la rénovation de maisons, appartements, et locaux commerciaux.',
            description:
                "Notre service de rénovation couvre tous les aspects de la rénovation intérieure et extérieure. Cela inclut la rénovation de cuisines, salles de bains, la remise à neuf des façades, l'aménagement de nouveaux espaces et l'optimisation énergétique des bâtiments. Nous utilisons des matériaux de qualité et des techniques modernes pour garantir une rénovation durable et esthétique. La rénovation permet d'améliorer le confort, d'augmenter la valeur de votre propriété et de bénéficier d'avantages fiscaux et de subventions pour les travaux d'efficacité énergétique.",
            steps: [
                {
                    title: 'Évaluation',
                    label: 'Diagnostic complet du bâtiment & Identification des besoins',
                    Icon: FaSearchPlus,
                },
                {
                    title: 'Conception',
                    label: 'Planification détaillée & Proposition de design',
                    Icon: FaPencilRuler,
                },
                {
                    title: 'Devis',
                    label: "Présentation d'un devis transparent et personnalisé",
                    Icon: FaFileInvoice,
                },
                {
                    title: 'Réalisation',
                    label: 'Exécution des travaux de rénovation par des professionnels',
                    Icon: FaHammer,
                },
                {
                    title: 'Suivi',
                    label: "Contrôle régulier de l'avancement & Ajustements si nécessaire",
                    Icon: FaTasks,
                },
                {
                    title: 'Finalisation',
                    label: 'Finitions de qualité & Vérification finale avec le client',
                    Icon: FaThumbsUp,
                },
            ],
        },
    },
    {
        id: 3,
        name: 'Isolation thermique',
        imageUrl:
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.30.02+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+flat+vector+design+centered+on+building+thermal+insulation.+The+design+is+simple+a.png',
        content: {
            title: 'Isolation Thermique',
            label: 'Notre entreprise est certifiée QUALIBAT RGE depuis 2015 pour la réalisation des travaux d’isolation thermique exté- rieure sur les pavillons, im- meubles, magasins...',
            description:
                'Nous fournissons et posons les matériaux nécessaires à l’isolation thermique extérieure. En premier lieu, nous plaquons un isolant, recouvert par un enduit armé, ceci protège votre bâtiment et imperméabilise les façades. L’enduit décoratif représente la touche finale de la façade, tout en isolant les bâtiments.\nL’isolation permet d’alléger vos factures d’énergie, de bénéficier d’avantages fiscaux et de prétendre à des subventions. Pour cela les matériaux doivent avoir les certifications ACERMI et avis techniques spécifiques.',
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
        id: 4,
        name: 'Revêtements de sols',
        imageUrl:
            'https://toffolon-website.s3.eu-west-3.amazonaws.com/services/DALL%C2%B7E+2023-11-18+13.31.07+-+A+16_9+format+full-frame+image+with+a+white+background%2C+featuring+a+centered+flat+vector+design+of+a+building+floor+renovation.+The+design+is+simple+a.png',
        content: {
            title: 'Revêtements de sols',
            label: "Expert en revêtements de sols, QUALIBAT RGE depuis 2015, spécialisé en parquets, carrelages, et revêtements modernes pour tous types d'espaces.",
            description:
                "Notre service de revêtements de sols offre une gamme complète de solutions pour votre intérieur. Cela inclut l'installation de parquet, carrelage, moquette, et sols vinyles. Nous fournissons une expertise dans le choix des matériaux, la préparation du sol, et l'installation soignée pour garantir durabilité et esthétique. Nos revêtements de sols améliorent l'esthétique de votre espace, offrent un confort accru et peuvent contribuer à l'isolation acoustique et thermique de vos pièces.",
            steps: [
                {
                    title: 'Consultation',
                    label: 'Évaluation des besoins et conseils en matière de revêtements',
                    Icon: FaRegCompass,
                },
                {
                    title: 'Sélection',
                    label: 'Choix des matériaux adaptés à votre espace et budget',
                    Icon: FaPalette,
                },
                {
                    title: 'Devis',
                    label: "Établissement d'un devis clair et détaillé",
                    Icon: FaCalculator,
                },
                {
                    title: 'Préparation',
                    label: "Préparation et nivellement du sol pour l'installation",
                    Icon: FaLevelUpAlt,
                },
                {
                    title: 'Installation',
                    label: 'Pose professionnelle du revêtement choisi',
                    Icon: FaWrench,
                },
                {
                    title: 'Finition',
                    label: 'Vérification de la qualité et finitions détaillées',
                    Icon: FaCheckCircle,
                },
                {
                    title: 'Finalisation',
                    label: 'Nettoyage du site et présentation finale au client',
                    Icon: FaStar,
                },
            ],
        },
    },
];
