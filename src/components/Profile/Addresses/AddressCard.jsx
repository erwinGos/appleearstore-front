import React, { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'

const AddressCard = ({address, updateAddress, deleteAddress}) => {
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [addressForm, setAddressForm] = useState(address);
  const cancelButtonRef = useRef(null)

  return (
  <>
      {/* Update dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                  <form>
                      <h3 className="text-md">Ajouter une adresse :</h3>
                    <div className='mt-2'>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                          Nom prénom : 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="name"
                            value={addressForm.name}
                            onChange={(e) => setAddressForm({...addressForm, name : e.target.value})}
                            id="name"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Mon adresse principale"
                            />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                            Voie : 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="street"
                            value={addressForm.street}
                            onChange={(e) => setAddressForm({...addressForm, street : e.target.value})}
                            id="street"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="2 rue John Doe"
                            />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            Numéro de téléphone : 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="phoneNumber"
                            value={addressForm.phoneNumber}
                            onChange={(e) => setAddressForm({...addressForm, phoneNumber : e.target.value})}
                            id="phoneNumber"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="+33606060606"
                            />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            Ville : 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="city"
                            value={addressForm.city}
                            onChange={(e) => setAddressForm({...addressForm, city : e.target.value})}
                            id="city"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Paris"
                            />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Code postal : 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="postalCode"
                            value={addressForm.postalCode}
                            onChange={(e) => setAddressForm({...addressForm, postalCode : e.target.value})}
                            id="postalCode"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="75000"
                            />
                        </div>
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Pays
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={addressForm.country}
                        onChange={(e) => setAddressForm({...addressForm, country : e.target.value})}
                        className="mt-2 block w-1/2 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option>Allemagne</option>
                        <option>Belgique</option>
                        <option>Espagne</option>
                        <option>France</option>
                        <option>Italie</option>
                      </select>
                    </div>
                  </form>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button onClick={() => setOpen(false)} className="smallerBtn bgSecondaryColor">
                      <span className='textLoginBtn'>
                              Annuler
                      </span>
                    </button>
                    <button onClick={() => {
                      updateAddress(addressForm)
                      setOpen(false)
                    }} className="smallerBtn bgPrimaryColor ml-2">
                      <span className='textLoginBtn'>
                            Valider les modifications
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Delete dialog */}
      <Transition.Root show={openDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenDelete}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <span>Voulez vous vraiment supprimer cette adresse ? Cette action sera irréversible.</span>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button onClick={() => setOpenDelete(false)} className="smallerBtn bgSecondaryColor">
                      <span className='textLoginBtn'>
                              Annuler
                      </span>
                    </button>
                    <button onClick={() => {
                      deleteAddress(addressForm.id)
                      setOpenDelete(false)
                    }} className="smallerBtn bgPrimaryColor ml-2">
                      <span className='textLoginBtn'>
                            Oui, je supprime mon adresse definitivement.
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    <div className='m-2 p-4 rounded-md border-[0.5px] border-black/25 w-[250px] h-[220px] flex flex-col items-start'>
      <span className='max-w-[180px] text-md font-bold overflow-ellipsis truncate overflow-hidden whitespace-nowrap'>{address.name}</span>
      <span className='colorText'>{address.street}</span>
      <span>{address.city + ", " + address.postalCode}</span>
      <span>{address.country}</span>
      <span>{address.phoneNumber}</span>
      <div className='flex w-full mt-4'>
        <button onClick={() => setOpen(true)} type="submit" className='m-2 hover:underline colorTextHover'>Modifier</button>
        <button onClick={() => setOpenDelete(true)} className='m-2 hover:underline colorTextHover'>Supprimer</button>
      </div>
    </div>
  </>
  )
}

export default AddressCard