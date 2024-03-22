import React from 'react'

const DateFormater = (dateString) => {
    const mois = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    const date = new Date(dateString);
    const jour = date.getDate().toString().padStart(2, '0');
    const nomMois = mois[date.getMonth()];
    const annee = date.getFullYear();

    const dateFormatee = `${jour} ${nomMois} ${annee}`;
    
    return dateFormatee
}

export default DateFormater