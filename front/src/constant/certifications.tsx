import React from 'react';
import { FaBalanceScale, FaPaintRoller, FaShieldAlt } from 'react-icons/fa';

export interface certification {
    name: string;
    description: string;
    icon: React.ElementType;
    url: string | undefined;
}

export const entrepriseCertifications: certification[] = [
    {
        name: 'Qualibat RGE Peinture et Ravalement',
        description:
            'Compétence technique avancée et qualité environnementale en peinture et façade.',
        icon: FaPaintRoller,
        url: 'https://qualibat.com',
    },
    {
        name: 'Garantie décennale',
        description: 'Assurance française obligatoire pour dommages de construction sur dix ans..',
        icon: FaShieldAlt,
        url: 'https://www.service-public.fr/particuliers/vosdroits/F2034',
    },
    {
        name: 'Garantie RC Pro',
        description: 'Assurance couvrant les dommages tiers en activité professionnelle.',
        icon: FaBalanceScale,
        url: undefined,
    },
];
