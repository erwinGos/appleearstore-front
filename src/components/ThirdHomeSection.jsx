import React from 'react';
import ImgDelivery from '../assets/Trolley.png';
import ImgReturn from '../assets/Undo.png';
import ImgProtect from '../assets/Protect.png';

const ThirdHomeSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between px-5 md:px-10 lg:px-28 py-10 md:py-20 backgroundPrimarySection">
        <div className="flex flex-1 flex-col md:flex-row items-center mb-10 md:mb-0">
            <img src={ImgDelivery} alt="" className="w-20 h-20 md:w-20 md:h-20 lg:w-22 lg:h-22" />
            <ul className="ml-4">
                <li>
                    <h3 className='sm:text-left text-center'>Livraison gratuite</h3>
                </li>
                <li>
                    <p className='sm:text-left text-center'>Livraison gratuite au dessus de 150€.</p>
                </li>
            </ul>
        </div>
        <div className="flex flex-1 flex-col md:flex-row items-center mb-10 md:mb-0">
            <img src={ImgReturn} alt="" className="w-20 h-20 md:w-20 md:h-20 lg:w-22 lg:h-22" />
            <ul className="ml-4">
                <li>
                    <h3 className='sm:text-left text-center'>Satisfait ou remboursé</h3>
                </li>
                <li>
                    <p className='sm:text-left text-center'>Retour sous 30 jours disponible.</p>
                </li>
            </ul>
        </div>
        <div className="flex flex-1 flex-col md:flex-row items-center">
            <img src={ImgProtect} alt="" className="w-20 h-20 md:w-20 md:h-20 lg:w-22 lg:h-22" />
            <ul className="ml-4">
                <li>
                    <h3 className='sm:text-left text-center'>Paiements sécurisés</h3>
                </li>
                <li>
                    <p className='sm:text-left text-center'>Tous les paiements sont sécurisés.</p>
                </li>
            </ul>
        </div>
    </section>
  );
};

export default ThirdHomeSection;
