import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div className='border-1 border-black/20'>
        <span>{address.name}</span>
        <span>{address.street}</span>
        <span>{address.city}, {address.postalcode}</span>
        <span>{address.country}</span>
        <span>{address.phonenumber}</span>
    </div>
  )
}

export default AddressCard