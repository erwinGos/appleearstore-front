import React, { useState } from 'react';
import AddressCard from './AddressCard';
import AddAddressCard from './AddAddressCard';

const Address = () => {

  const [addressesList, setAddressesList] = useState([]);

  return (
    <div className='col-span-3'>
      <div className="mt-10 border border-1 border-slate-500 rounded-sm pb-4 w-full min-w-[250px]">
        <div className='m-4 sm:block flex justify-center items-center'>
          <AddAddressCard />
          {addressesList.length > 0 ? addressesList.map((address) => (
            <AddressCard address={address}/>
          )) : null}
        </div>
      </div>
    </div>
  )
}

export default Address