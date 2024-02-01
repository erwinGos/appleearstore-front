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
            <div className='p-28'>
                <ul className='flex flex-wrap'>
                    <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'><ProductCard/></li>
                    <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'><ProductCard/></li>
                    <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'><ProductCard/></li>
                    <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'><ProductCard/></li>
                    <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'><ProductCard/></li>
                    <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'><ProductCard/></li>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default SecondaryHomeSection;
