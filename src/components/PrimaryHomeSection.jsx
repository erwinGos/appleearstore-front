import React from 'react';
import { Link } from 'react-router-dom';

import AirpodsImg from '../assets/Airpods.png';
import AirpodsShadowImg from '../assets/AirpodsShadow.png';

import AnimatedPage from '../components/AnimatedPage';

const PrimaryHomeSection = () => {
  return (
<section className="PrimaryHomeSection relative overflow-hidden flex flex-col md:flex-row max-h-50 pl-4 md:pl-32 pt-16 pb-24 backgroundPrimarySection">
    <AnimatedPage>
        <div className='ImageContainer'>
            <img src={AirpodsImg} alt="Airpods" />
            <img src={AirpodsShadowImg} alt="Airpods" />
        </div>
    </AnimatedPage>   
    <div className='ml-4 md:ml-16'>
        <AnimatedPage>
            <ul className='ListHomeContent flex flex-col mt-4 md:mt-14'>
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
                <li className='max-w-3xl mt-2'>
                    <p>
                        Découvrez la Liberté de l'Audio Sans Fil avec les AirPods 2 d'Apple.
                        Qualité sonore exceptionnelle, connectivité instantanée et confort absolu.
                        Commandez les vôtres aujourd'hui et vivez une expérience auditive incomparable.
                    </p>
                </li>
                <li className='mt-4'>
                    <Link className='mainButton bgPrimaryColor'>
                        <span>
                            ACHETER MAINTENANT
                        </span>
                    </Link>
                </li>
            </ul>
        </AnimatedPage>  
    </div>
    <div className='HomeRectangle hidden md:block'></div>
</section>
  );
};

export default PrimaryHomeSection;
