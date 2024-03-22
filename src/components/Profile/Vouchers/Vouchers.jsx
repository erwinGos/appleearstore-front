import React, { useEffect, useState } from 'react'
import VoucherTable from "./VoucherTable";
import { useDispatch, useSelector } from 'react-redux';
import { useVoucher } from '../../../features/voucher/VoucherSlice';
import { GetSelfUser } from '../../../features/user/UserSlice';

import toast, { Toaster } from 'react-hot-toast';

const Vouchers = () => {

  const vouchers = useSelector(state => state.vouchers);
  const users = useSelector(state => state.user);

  const [voucherInput, setVoucherInput] = useState("");
  const [voucherList, setVoucherList] = useState(vouchers.vouchers);
  const dispatch = useDispatch();
  
  const UseVoucherRequest = (e) => {
    e.preventDefault();
    dispatch(useVoucher(voucherInput))
    .then((res) => {
      if(res.payload) {
        dispatch(GetSelfUser()).then(() => toast.success("Solde mis à jour"))
      } else {
        toast.error("Le code entré est invalide, ou a probablement déjà été utilisé.")
      }
    });
    
  }

  return (
    <div className='col-span-2'>
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: 'Toaster',
          duration: 1000,

          // Default options for specific types
          success: {
            duration: 1500,
            iconTheme: {
              primary: '#FFF',
              secondary: 'black',
            },
          },
        }}
      />
      <div className="mt-10 border border-1 border-slate-500 rounded-sm pb-4 w-full">
        <div className='m-4'>
          <span>Solde de votre compte : <span className="text-xl font-semibold text-green-500">{users.user.balance.toFixed(2)} €</span></span>
          <form onSubmit={(e) => {
            if(!voucherInput) {
              e.preventDefault()
              toast.error("Le champs ne peut être vide.")
            } else {
              UseVoucherRequest(e)
            }
          }}>
            <div className="mt-2">
              <input
              type="text"
              name="name"
              id="name"
              value={voucherInput}
              onChange={(e) => setVoucherInput(e.target.value)}
              className="block w-full md:w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0UVg-6Pk3-GEqs-UcUk-tUpZ"
              />
            </div>
            <button className="smallerBtn bgPrimaryColor mt-4">
              <span className='textLoginBtn'>
                  Recharger votre compte
              </span>
            </button>
          </form>
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