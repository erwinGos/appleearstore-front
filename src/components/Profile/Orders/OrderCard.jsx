import React from 'react'
import DateFormater from "../../DateFormater";
import OrderItem from './OrderItem';


const OrderCard = ({order}) => {
  return (
    <div className="mt-10 border border-1 border-slate-500 rounded-sm w-full min-w-[250px]">
        <div className='flex colorText backgroundPrimarySection'>
            <div className='w-[70%] p-2 flex'>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>Commande effectuée le : </span>
                    <span className='font-thin'>{DateFormater(order.createdAt)}</span>
                </div>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>Total : </span>
                    <span className='font-thin'>{order.total} €</span>
                </div>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>Livraison à : </span>
                    <span className='font-thin'>{order.street}</span>
                </div>
            </div>
            <div className='w-[30%] p-2 flex justify-end'>
                <div className='flex flex-col text-sm m-2'>
                    <span className='font-extrabold'>N° de commande : </span>
                    <span className='font-thin'>{order.orderNumber}</span>
                </div>
            </div>
        </div>
        <div className='p-4 flex flex-col'>
            <div className='w-full flex items-start justify-between'>
                <span className="font-extrabold">Date de livraison estimée le {DateFormater(order.estimatedDeliveryDate)}</span>
                <div className='flex flex-col w-[30%]'>
                <button className='smallerBtn bgPrimaryColor m-1'>Suivre le colis</button>
                </div>
            </div>
            <div className='w-full flex flex-col items-start justify-between'>
                {order.productOrders.map((item, key) => (
                    <OrderItem item={item} key={key}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OrderCard