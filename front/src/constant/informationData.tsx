import {FaBuilding, FaPhoneAlt} from "react-icons/fa";

export default function informationData() {
    const informationData = [
        {
            'Icon': FaPhoneAlt,
            'text': 'Téléphone',
            'content': '+33 1 46 71 84 19'
        },
        {
            'Icon': FaBuilding,
            'text': 'Addresse',
            'content': '25 allée gabriel, 93250, Les pavillons-sous-bois'
        }
    ]

    return (
        informationData
    );
}