import React from "react";
import {FaBrush, FaEnvelope, FaUserAlt} from "react-icons/fa";

export const inputsContact = [
    {
        "apiName": "last_name",
        "field": "Nom",
        "placeholder": "Ajouter votre Nom",
        "icon": <FaUserAlt/>
    },
    {
        "apiName": "first_name",
        "field": "Prénom",
        "placeholder": "Ajouter votre Prénom",
        "icon": <FaUserAlt/>
    },
    {
        "apiName": "email",
        "field": "Mail",
        "placeholder": "exemple@email.com",
        "icon": <FaEnvelope/>
    },
    {
        "apiName": "message",
        "field": "Message",
        "placeholder": "Votre message...",
        "icon": <FaBrush/>
    }
]