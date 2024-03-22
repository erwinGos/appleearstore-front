import React, { useState } from 'react'
import VoucherTable from "./VoucherTable";

const Vouchers = () => {

  const [voucherList, setVoucherList] = useState([]);

  return (
    <div className='col-span-2'>
      <div className="mt-10 border border-1 border-slate-500 rounded-sm pb-4 w-full">
        <div className='m-4'>
          <span>Solde de votre compte : <span className="text-xl font-semibold text-green-500">0,00 €</span></span>
          <div className="mt-2">
            <input
            type="text"
            name="name"
            id="name"
            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0UVg-6Pk3-GEqs-UcUk-tUpZ"
            />
          </div>
          <button className="smallerBtn bgPrimaryColor mt-4">
            <span className='textLoginBtn'>
                Recharger votre compte
            </span>
          </button>
        </div>
      </div>
      <div className="mt-10 border border-1 border-slate-500 rounded-sm pb-4 w-full">
        <div className='m-4'>
          <span>Historique des opérations : </span>
          <VoucherTable vouchers={voucherList}/>
        </div>
      </div>
    </div>
  )
}

export default Vouchers