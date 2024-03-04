import React from 'react'
import blankProduct from '../../../assets/blank_product.png';


const OrderCard = () => {
  return (
    <div className="mt-10 border border-1 border-slate-500 rounded-sm w-full min-w-[250px]">
        <div className='flex colorText backgroundPrimarySection'>
            <div className='w-[70%] p-2 flex'>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>Commande effectuée le : </span>
                    <span className='font-thin'>03 mars 2024</span>
                </div>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>Total : </span>
                    <span className='font-thin'>115.50 €</span>
                </div>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>Livraison à : </span>
                    <span className='font-thin'>John Doe</span>
                </div>
            </div>
            <div className='w-[30%] p-2 flex justify-end'>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>N° de commande : </span>
                    <span className='font-thin'>179304827402</span>
                </div>
            </div>
        </div>
        <div className='p-4 flex flex-col'>
            <div className='w-full flex items-start justify-between'>
                <span className="font-extrabold">Livraison le 7 mars </span>
                <div className='flex flex-col w-[30%]'>
                    <button className='smallerBtn bgSecondaryColor m-1'>Initialiser un retour</button>
                </div>
            </div>
            <div className='w-full flex items-start justify-between'>
                <div className='flex'>
                    <img src={blankProduct} className="w-[20%]" />
                    <div className='flex flex-col'>
                        <span className='text-lg colorText mb-1 mx-2'>Apple Airpods 3</span>
                        <span className='text-sm mb-1 mx-2'>Couleur : Orange</span>
                    </div>
                </div>
                <div className='flex flex-col w-[30%]'>
                    <button className='smallerBtn bgPrimaryColor m-1'>Suivi colis</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard