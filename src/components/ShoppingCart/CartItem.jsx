import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon, CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { deleteCart, AddProduct} from '../../features/product/ProductSlice';
import blankProduct from '../../assets/blank_product.png';

import ImageComponent from '../ImageComponent';

export default function CartItem({cart, index}) {
    const dispatch = useDispatch();
    const [newQuantity, setNewQuantity] = useState(cart.quantity);
    const [AddVisible, setAddVisible] = useState(false);
    const input = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (input.current && !input.current.contains(event.target)) {
                setAddVisible(false);
            }
        }

            document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [input]);

    const handleChangeNewQuantity = event => {
        setNewQuantity(event.target.value);
      };

    const addToCart = (id, newQuantity) => {
        let newCart = {
          productId: id,
          quantity: parseInt(newQuantity)
        };
        dispatch(AddProduct(newCart));
        setAddVisible(false);
      }

    return (
        <>
            <div className="flex-shrink-0">
            {cart.product.productImages.length > 0 ? <ImageComponent base64Data={cart.product.productImages != null ? (cart.product.productImages.length > 0 ? cart.product.productImages[0].image : "") : ""} />
            :
            <img src={blankProduct} className="h-24 w-24 rounded-md object-cover object-center sm:h-28 sm:w-28" />}
            </div>
            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                <div className="flex justify-between">
                    <h3 className="text-md">
                    <a href={cart.product.href} className="font-medium text-gray-700 hover:text-gray-800">
                        {cart.product.productName}
                    </a>
                    </h3>
                </div>
                <div className="mt-1 flex text-sm">
                    <p className="text-gray-500">{cart.colorName}</p>
                    {cart.product.size ? (
                    <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{cart.product.size}</p>
                    ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-gray-900">{cart.product.reduction > 0 ? cart.product.price - cart.product.reduction : cart.product.price} €</p>
                {cart.product.reduction > 0 ? <span className="text-base md:text-lg line-through text-[#951D46] bg-[#FFB4CD] rounded-full pr-1 pl-1">{cart.product.price} €</span> : null}
                </div>

                <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${index}`} className="sr-only">
                    Quantity, {cart.product.productName}
                </label>
                <div ref={input} className='flex'>
                        <input
                            onClick={() => setAddVisible(true)}
                            className="block border-2 font-bold rounded-md w-2/4 focus:outline-none focus:ring focus:ring-violet-300" 
                            type="number"
                            onChange={handleChangeNewQuantity}
                            value={newQuantity}
                        />
                    <CheckCircleIcon onClick={() => addToCart(cart.product.id, newQuantity)} id={`checkQuantity-${index}`} className={`${AddVisible ? 'visible' : 'invisible'} ml-2 h-10 w-10 text-gray-500 cursor-pointer`} />
                </div>
                <div className="absolute right-0 top-0">
                    <button onClick={() => dispatch(deleteCart(cart.id))} type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Remove</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                </div>
            </div>

            <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                {cart.product.currentStock > 0 ? (
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                ) : (
                <XMarkIcon className="h-5 w-5 flex-shrink-0 text-red-500" aria-hidden="true" />
                )}
                <span>{cart.product.currentStock ? 'Produit disponible' : `Produit indisponible`}</span>
            </p>
            </div>
    </>
)}