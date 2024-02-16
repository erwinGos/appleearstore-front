import React, { useEffect } from 'react';
import ProductCard from './ProductCard';

import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../features/product/ProductSlice';

const SecondaryHomeSection = () => {
  const dispatch = useDispatch();
  debugger;
  const products = useSelector(state => state.products);

  useEffect(() => {
    const productFilter = {
      page: 1,
      maxResult: 1,
      brands: "test",
    };
    dispatch(GetProducts(productFilter));
  }, [dispatch]);
  return (
    <section className="backgroundSecondarySection">
        <div className='mt-8'>
            <ul className='text-center'>
                <li><h2>BEST SELLERS</h2></li>
                <li><p>Les choix préférés de nos clients, découvrez nos produits populaires !</p></li>
            </ul>
            <div className='pt-24 pb-28'>
                <ul className='flex flex-wrap justify-center'>
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product, index) => (
                        <li key={index} className='m-2'><ProductCard /></li>
                    ))
                    ) : (
                        <p>Aucun produit trouvé.</p> // Afficher un message ou un chargement
                    )}
                </ul>
            </div>
        </div>
    </section>
  );
};

export default SecondaryHomeSection;
