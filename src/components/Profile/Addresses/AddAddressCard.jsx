import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'

const AddAddressCard = () => {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <>
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
                            Name : 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="name"
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
                        className="mt-2 block w-1/2 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="France"
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
                    <button onClick={() => setOpen(false)} className="smallerBtn bgPrimaryColor">
                      <span className='textLoginBtn'>
                              Annuler
                      </span>
                    </button>
                    <button onClick={() => setOpen(false)} className="smallerBtn bgSecondaryColor ml-2">
                      <span className='textLoginBtn'>
                            Ajouter l'adresse
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div onClick={() => setOpen(true)} className='rounded-md transform hover:scale-105 duration-200 cursor-pointer border border-dotted border-1 border-black/25 w-[200px] h-[200px] flex flex-col justify-center items-center'>
        <PlusIcon width={60}/>
        <span className="text-md colorText">Ajouter une adresse</span>
      </div>
    </>
  )
}

export default AddAddressCard