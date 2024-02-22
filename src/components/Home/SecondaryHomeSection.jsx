import React, { useEffect } from 'react';
import ProductCard from '../Product/ProductCard';

import { useDispatch, useSelector } from 'react-redux';
import { GetBestProducts } from '../../features/product/ProductSlice';

const SecondaryHomeSection = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  
  useEffect(() => {
    const productFilter = {
      page: 1,
      maxResult: 10,
      brands: "test",
    };
    dispatch(GetBestProducts(productFilter));
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
                        <li key={index} className='m-2'><ProductCard product={product} /></li>
                    ))
                    ) : (
                        <p>Aucun produit trouvé.</p>
                    )}
                </ul>
            </div>
        </div>
    </section>
  );
};

export default SecondaryHomeSection;
