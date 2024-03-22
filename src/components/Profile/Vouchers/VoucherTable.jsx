import React from 'react'

const VoucherTable = ({vouchers}) => {
  return (
    vouchers.length < 1 ? 
    <div>
      <span className='text-sm italic mt-4'>Vous n'avez utilisé aucun chèque-cadeau. (fonctionnalité de listing des vouchers utilisés en developpement.)</span>
    </div>
    :
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Code
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {vouchers.map((voucher, _) => (
                    <tr key={_}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {voucher.CreatedAt}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{voucher.code}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{voucher.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherTable