import React, { useEffect, useState } from 'react';
import AddressCard from './AddressCard';
import AddAddressCard from './AddAddressCard';
import { useDispatch, useSelector } from 'react-redux';

import { getMyAddresses, updateAddress, deleteAddress } from '../../../features/address/AddressSlice';

const Address = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(state => state.address);

  useEffect(() => {
    dispatch(getMyAddresses());
  }, [])

  const updateAddressFunc = (editedAddress) => {
    dispatch(updateAddress(editedAddress));
  }

  const deleteAddressFunc = (addressId) => {
    dispatch(deleteAddress(addressId));
  }

  return (
    <div className='col-span-3'>
      <div className="mt-10 border border-1 border-slate-500 rounded-sm p-4 w-full min-w-[250px]">
        <div className='flex flex-wrap justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3'>
          <AddAddressCard />
          {addresses.addresses.length > 0 ? addresses.addresses.map((address) => (
            <AddressCard address={address} updateAddress={updateAddressFunc} deleteAddress={deleteAddressFunc} />
          )) : null}
        </div>
      </div>
    </div>
  )
}

export default Address