import React from 'react';
import ImgDelivery from '../assets/Trolley.png';
import ImgReturn from '../assets/Undo.png';
import ImgProtect from '../assets/Protect.png';

const ThirdHomeSection = () => {
  return (
    <section className="flex justify-between p-28 backgroundPrimarySection">
        <div className='flex'>
            <img src={ImgDelivery} alt="" />
            <ul>
                <li>
                    <h3>Livraison gratuite</h3>
                </li>
                <li>
                    <p>Livraison gratuite au dessus de 150€.</p>
                </li>
            </ul>
        </div>
        <div className='flex'>
            <img src={ImgReturn} alt="" />
            <ul>
                <li>
                    <h3>Satisfait ou remboursé</h3>
                </li>
                <li>
                    <p>Retour sous 30 jours disponible.</p>
                </li>
            </ul>
        </div>
        <div className='flex'>
            <img src={ImgProtect} alt="" />
            <ul>
                <li>
                    <h3>Paiements sécurisés</h3>
                </li>
                <li>
                    <p>Tous les paiements sont sécurisés.</p>
                </li>
            </ul>
        </div>
    </section>
  );
};

export default ThirdHomeSection;
