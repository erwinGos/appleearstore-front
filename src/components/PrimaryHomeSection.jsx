import React from 'react';
import { Link } from 'react-router-dom';

import AirpodsImg from '../assets/Airpods.png';
import AirpodsShadowImg from '../assets/AirpodsShadow.png';

const PrimaryHomeSection = () => {
  return (
    <section className="relative overflow-hidden flex max-h-50 pl-32 pt-24 pb-24 bg-[#EEEEEE]">
        <div>
            <img src={AirpodsImg} alt="Airpods" />
            <img src={AirpodsShadowImg} alt="Airpods" />
        </div>
        <div className='ml-16'>
            <ul className='flex flex-col mt-14'>
                <li>
                    <h1>
                        Airpods
                    </h1>
                </li>
                <li>
                    <h2>
                        (2e Génération)
                    </h2>
                </li>
                <li className='mt-2'>
                    <p>
                        Découvrez la Liberté de l'Audio Sans Fil avec les AirPods 2 d'Apple. 
                        <br/>Qualité sonore exceptionnelle, connectivité instantanée et confort absolu. 
                        <br/>Commandez les vôtres aujourd'hui et vivez une expérience auditive incomparable.
                    </p>
                </li>
                <li className='mt-4'>
                    <Link className='homeBtn bgPrimaryColor'>
                        <span className='textHomeBtn'>
                            ACHETER MAINTENANT
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className='HomeRectangle'></div>
    </section>
  );
};

export default PrimaryHomeSection;
