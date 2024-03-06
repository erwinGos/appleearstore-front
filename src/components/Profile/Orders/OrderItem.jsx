import React from 'react'
import blankProduct from '../../../assets/blank_product.png';
import ImageComponent from '../../ImageComponent';
import { Link } from 'react-router-dom';

const OrderItem = ({item}) => {
    console.log(item)
  return (
    <div className='flex w-full justify-between mt-2'>
        <div className='flex'>
            {item.product.productImages.length > 0 ? <ImageComponent base64Data={item.product.productImages[0].image}/> : <img src={blankProduct} className="h-24 w-24 object-cover object-center sm:h-28 sm:w-28" />}
            <div className='flex flex-col'>
                <Link to={"/productdetails/"+ item.product.id}><span className='text-xl colorText mb-1 mx-2'>{item.product.brand.name}, {item.product.productName}</span></Link>
                {item.colorName ? <span className='text-sm mb-1 mx-2'>Couleur : {item.colorName}</span> : null}
            </div>
        </div>
        <div className='flex flex-col w-[30%]'>
            <button className='smallerBtn bgSecondaryColor m-1'>Initialiser un retour</button> 
        </div>
    </div>
  )
}

export default OrderItem