import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from "../../Pagination";

import { getMyOrdersPagination } from '../../../features/order/OrderSlice';
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order);
  const [page, setPage] = useState(1);
  const [maxResults, setMaxResults] = useState(15);

  useEffect(() => {
    SearchForOrders(page)
  }, [])

  const setPageFunction = (page) => {
    console.log("bojn")
    setPage(page)
    SearchForOrders(page)
  };

  const SearchForOrders = (page) => {
    dispatch(getMyOrdersPagination({page, maxResult: maxResults}));
  }

  return (
    <div className='col-span-3 flex flex-col'>
      <div className='w-full flex justify-center'>
        <Pagination setPageFunction={setPageFunction} page={page} maxPage={orders.maxPages}/>
      </div>
      {orders.orders.map((order, key) => (
        <OrderCard key={key} order={order}/>
      ))}
    </div>
  )
}

export default Orders