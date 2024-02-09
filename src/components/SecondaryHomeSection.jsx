import React from 'react';
import ProductCard from './ProductCard';

const SecondaryHomeSection = () => {
  return (
    <section className="backgroundSecondarySection">
        <div className='mt-8'>
            <ul className='text-center'>
                <li><h2>BEST SELLERS</h2></li>
                <li><p>Les choix préférés de nos clients, découvrez nos produits populaires !</p></li>
            </ul>
            <div className='pt-24 pb-28'>
                <ul className='flex flex-wrap justify-center'>
                    <li className='m-2'><ProductCard/></li>
                    <li className='m-2'><ProductCard/></li>
                    <li className='m-2'><ProductCard/></li>
                    <li className='m-2'><ProductCard/></li>
                    <li className='m-2'><ProductCard/></li>
                    <li className='m-2'><ProductCard/></li>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default SecondaryHomeSection;
