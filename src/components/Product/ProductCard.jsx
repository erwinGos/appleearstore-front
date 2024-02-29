import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ProductImg from '../../assets/airpod_product.png'

import { AddProduct } from '../../features/product/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

import toast, { Toaster } from 'react-hot-toast';

const ProductCard = ({product}) => {
  const user = useSelector(state => state.user);
  const products = useSelector(state => state.products);
  const [showHideBtn, setShowHideBtn] = useState(false);
  const dispatch = useDispatch();

  const notify = () => toast.success('Produit ajouté au panier.');
  const addToCart = (id) => {
    const checkItem = products.cart.find(item => item.product.id === id);
    let cart = {
      productId: id,
      quantity: (checkItem ? checkItem.quantity : 0 ) + 1
    };
    dispatch(AddProduct(cart)).then(() => notify());

  }
  return (
    <>
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: 'Toaster',
          duration: 1000,

          // Default options for specific types
          success: {
            duration: 1500,
            iconTheme: {
              primary: '#FFF',
              secondary: 'black',
            },
          },
        }}
      />
      <ul onMouseOver={() => setShowHideBtn(true)} onMouseLeave={() => setShowHideBtn(false)} className='transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg border-2 rounded w-auto h-auto flex flex-col justify-end'>
           <Link to={'/productdetails/' + product.id}>
              <li>
                <img src={ProductImg} alt="" className="" />
              </li>
            </Link>
            { user.isAuth ?
                <Link onClick={() => {addToCart(product.id)}} className={`${showHideBtn ? 'visible' : 'invisible'} text-white relative bgPrimaryColor p-2 h-10 text-center`}>AJOUTER AU PANIER</Link>
              :
                <div></div>
            }
          <Link to={'/productdetails/' + product.id}>
            <li className='pl-2 pt-2'>
              <h4 className="text-lg md:text-xl lg:text-2xl">{product.productName}</h4>
            </li>
          </Link>
          <Link to={'/productdetails/' + product.id}>
            <li className='pl-2'>
              <p className="text-base md:text-lg">{product.brand.name}</p>
            </li>
          </Link>
          <Link to={'/productdetails/' + product.id}>
            <li className='pl-2 pb-2 flex'>
            <span className="mr-2 text-lg font-semibold">{product.reduction > 0 ? product.price - product.reduction : product.price} €</span>
            {product.reduction > 0 ? <span className="text-base md:text-lg line-through text-[#951D46] bg-[#FFB4CD] rounded-full pr-1 pl-1">{product.price} €</span> : null}
            </li>
          </Link>
      </ul>
    </>
  );
};

export default ProductCard;
