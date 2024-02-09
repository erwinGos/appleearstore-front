import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ProductImg from '../assets/airpod_product.png'

const ProductCard = () => {
  const [showHideBtn, setShowHideBtn] = useState(false);
  return (
  <ul onMouseOver={() => setShowHideBtn(true)} onMouseLeave={() => setShowHideBtn(false)} className='transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg border-2 rounded w-auto h-auto flex flex-col justify-end'>
      <li><img src={ProductImg} alt="" className="" /></li>
      <Link className={`${showHideBtn ? 'visible' : 'invisible'} text-white relative bgPrimaryColor p-2 h-10 text-center`}>AJOUTER AU PANIER</Link>
      <li className='pl-2 pt-2'><h4 className="text-lg md:text-xl lg:text-2xl">Airpods</h4></li>
      <li className='pl-2'><p className="text-base md:text-lg">Ecouteurs</p></li>
      <li className='pl-2 pb-2 flex'>
        <span className="mr-2 text-lg font-semibold">150 €</span>
        <span className="text-base md:text-lg line-through text-[#951D46] bg-[#FFB4CD] rounded-full pr-1 pl-1">200 €</span>
      </li>
  </ul>
  );
};

export default ProductCard;
