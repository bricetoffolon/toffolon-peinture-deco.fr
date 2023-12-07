import informationData from '@/constant/informationData';

export default function legalNotice() {
    return {
        legalNotice: [
            {
                title: 'Éditeur du Site Web',
                content: {
                    "Nom de l'entrerprise": 'TOFFOLON SAS',
                    Siret: '38102749900015',
                    buttonAddress: {
                        text: informationData()[0].text,
                        content: informationData()[0].content,
                    },
                    buttonPhone: {
                        text: informationData()[1].text,
                        content: informationData()[1].content,
                    },
                    'Réprésentant légal': 'Jean-Marc Toffolon',
                },
            },
            {
                title: 'Hébergement',
                content: {
                    Nom: "Le site toffolon-peinture-deco est hébergé par [Nom de l'hébergeur]",
                    Adresse: 'Unknow',
                    Téléphone: 'Unknow',
                },
            },
            {
                title: 'Propriété intellectuelle',
                content: {
                    description:
                        'Le contenu du site Toffolon-peinture-deco, notamment les textes, images, graphismes et logo, appartient exclusivement à Toffolon SAS. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans autorisation de Toffolon SAS est prohibée et peut entraîner des actions et poursuites judiciaires telles que prévues par le Code de la propriété intellectuelle et le Code civil.\n',
                },
            },
            {
                title: 'Politique de Confidentialitée',
                content: {
                    description:
                        "Nous, TOFFOLON SAS, nous engageons à protéger la vie privée de nos utilisateurs. Les données personnelles collectées sur notre site web incluent votre nom, prénom, adresse e-mail et le contenu de votre message, que vous nous fournissez volontairement en remplissant notre formulaire de contact.\nVos données personnelles sont utilisées uniquement dans le but de répondre à vos demandes, d'améliorer nos services et de communiquer avec vous. Nous ne vendons, louons ni échangeons vos informations personnelles avec des tiers à des fins commerciales.\nConformément au RGPD, vous avez le droit d'accéder à vos données personnelles, de les rectifier, de demander leur suppression ou de limiter leur traitement. Vous avez également le droit de vous opposer au traitement de vos données personnelles et le droit à la portabilité de vos données.",
                },
            },
            {
                title: 'Liens hypertextes',
                content: {
                    description:
                        'Le site toffolon-peinture-deco peut contenir des liens hypertextes vers d’autres sites. Toffolon SAS n’assume aucune responsabilité sur le contenu des sites tiers.\n',
                },
            },
            {
                title: 'Modification des mentions légales',
                content: {
                    description:
                        "Toffolon SAS se réserve le droit de modifier les mentions légales à tout moment. L'utilisateur est invité à les consulter régulièrement.\n",
                },
            },
            {
                title: 'Des questions ?',
                content: {
                    button: 'ContactButton',
                },
            },
        ],
    };
}
