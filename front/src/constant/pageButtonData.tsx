import { FaClipboardCheck, FaInfoCircle, FaPaintBrush } from 'react-icons/fa';
import { buttonProps } from '@/components/layout/Button/contactButton';

const buttonList: buttonProps[] = [
    {
        href: '/notre-entreprise',
        name: 'Notre entreprise',
        icon: FaInfoCircle,
    },
    {
        href: '/nos-prestations',
        name: 'Nos prestations',
        icon: FaPaintBrush,
        info: 'Découvrer Nos Services',
    },
    {
        href: '/nos-realisations',
        name: 'Nos réalisations',
        icon: FaClipboardCheck,
        info: 'Nos Réalisations en Images',
    },
];

export default buttonList;
