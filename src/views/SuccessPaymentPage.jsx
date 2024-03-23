import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { GetSinglerOrderByNumber } from '../features/order/OrderApi';

const SuccessPaymentPage = () => {

    const dispatch = useDispatch();
    const { orderNumber } = useParams();
    const [order, setOrder] = useState(null);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        GetSinglerOrderByNumber(orderNumber).then((res) => {
            if(res) {
                setOrder(res)
            }
        });
    }, [])

    return (
        <section className="pt-20 h-[100vh]">
            {order ?
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    Bonjour {user.name}, votre commande {order.orderNumber} vers :
                    <br />
                    <span className='text-lg'>{order.street} {order.city} {order.postalCode} à bien été prise en compte.</span>
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <Link
                        to="/profile/orders"
                        className="rounded-md mainButton bgPrimaryColor"
                    >
                        Retour à vos commandes
                    </Link>
                    </div>
                </div>
            </div> : null}
        </section>
    )
}

export default SuccessPaymentPage