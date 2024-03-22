import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import { Link, useLocation } from 'react-router-dom';

import PersonalInformations from './PersonalInformations';

const SideBar = ({content}) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const dispatch = useDispatch();
    const location = useLocation();

    const links = [
        {
            name: "Votre compte",
            links: [
                {
                    name: "Information personnelles",
                    url: "/profile/personal-settings"
                },
                {
                    name: "Activer un chèque-cadeau",
                    url: "/profile/vouchers"
                },
                {
                    name: "Vos addresses",
                    url: "/profile/addresses"
                }
            ]
        },
        {
            name: "Commandes",
            links: [
                {
                    name: "Vos commandes",
                    url: "/profile/orders"
                },
                {
                    name: "Vos retours",
                    url: "/profile/returns"
                }
            ]
        },
        {
            name: "Support",
            links: [
                {
                    name: "Vos Tickets",
                    url: "/profile/tickets"
                }
            ]
        }
    ]

  return (
    <div className="min-h-[100vh] h-auto backgroundSecondarySection">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 xl:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium colorText">Espace client</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 secondaryText"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Fermer l'onglet</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="mt-4 border-t border-gray-200">
                  {links.map((section, index) => (
                        <div key={index} className='mb-4' style={{marginTop: index == 0 ? 10 : null}}>
                            <legend className="block text-xl font-medium colorText mb-2 ml-2">{section.name}</legend>
                            <ul>
                              {section.links.map((link, key) => (
                                <li key={key} className='p-3'><Link to={link.url} className={`ml-5 colorTextHover text-md ${location.pathname == link.url ? "colorTextActive" : null}`}>{link.name}</Link></li>
                              ))}
                            </ul>
                        </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

      <main className="mx-auto max-w-2xl px-8 sm:px-6 md:max-w-7xl xl:px-8">

        <div className="pt-12 pb-12 flex flex-col justify-center sm:grid sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-4">
          <aside className="col-span-1">
            <h2 className="sr-only">Espace client</h2>
            <button
              type="button"
              className="inline-flex items-center xl:hidden p-4"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="text-md colorText">Espace client</span>
              <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 colorText" aria-hidden="true" />
            </button>
                                  
            <div className="hidden xl:block">
                <label htmlFor="results" className="block text-2xl font-medium leading-6 colorText mb-4">
                    Espace client
                </label>
                <div className='w-full border border-1 border-slate-500	rounded-sm'>
                    {links.map((section, index) => (
                        <div className='mb-4' style={{marginTop: index == 0 ? 10 : null}} >
                            <legend className="block text-xl font-medium colorText mb-2 ml-2">{section.name}</legend>
                            <ul>
                              {section.links.map((link) => (
                                <li className='p-3'><Link to={link.url} className={`ml-5 colorTextHover text-md ${location.pathname == link.url ? "colorTextActive" : null}`}>{link.name}</Link></li>
                              ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
          </aside>
          {content}
        </div>
      </main>
    </div>
  )
}

export default SideBar