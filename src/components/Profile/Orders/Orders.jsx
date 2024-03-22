import React, { useState } from 'react'
import OrderCard from './OrderCard';

const Orders = () => {

  const [orders, setOrders] = useState([]);
  return (
    <div className='col-span-3'>
      <OrderCard />
    </div>
  )
}

export default Orders