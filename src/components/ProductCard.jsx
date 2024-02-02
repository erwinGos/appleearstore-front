import React from 'react';
import { Link } from 'react-router-dom';
import ProductImg from '../assets/airpod_product.png'

const ProductCard = () => {
  const showAddBtn = (e) => {
    const btn = e.currentTarget.children[1];
    btn.style.display = 'block';
  };
  const hideAddBtn = (e) => {
    const btn = e.currentTarget.children[1];
    btn.style.transition = "opacity 500ms ease-in-out";
    setTimeout(() => {
      btn.style.display = 'none';
    }, 100);
  };
  return (
  <ul onMouseOver={showAddBtn} onMouseLeave={hideAddBtn} className='transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg border-2 rounded w-auto h-auto flex flex-col justify-end'>
      <li><img src={ProductImg} alt="" className="" /></li>
      <li id="addCartBtn" className='bgPrimaryColor p-2 h-10 text-center hidden'><Link className='text-white'>AJOUTER AU PANIER</Link></li>
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