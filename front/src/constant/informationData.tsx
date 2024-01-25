import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function informationData() {
    return [
        {
            Icon: FaPhoneAlt,
            text: 'Téléphone',
            content: '+33 1 48 50 24 55',
            catchPhrase: 'Une question ? Appelez-nous !',
        },
        {
            Icon: FaMapMarkerAlt,
            text: 'Addresse',
            content: '25 allée gabriel, 93250, Les pavillons-sous-bois',
            catchPhrase: 'Où nous sommes ?',
        },
    ];
}
