import { FaClipboardCheck, FaInfoCircle, FaPaintBrush } from 'react-icons/fa';
import { buttonProps } from '@/components/layout/Button/contactButton';

export const buttonList: buttonProps[] = [
    {
        href: '/notre-entreprise',
        name: 'Notre entreprise',
        icon: FaInfoCircle,
    },
    {
        href: '/nos-prestations',
        name: 'Nos prestations',
        icon: FaPaintBrush,
        info: 'Pour connaître les services que nous proponsons',
    },
    {
        href: '/nos-realisations',
        name: 'Nos réalisations',
        icon: FaClipboardCheck,
        info: 'Voyez les résultats de nos travaux',
    },
];
