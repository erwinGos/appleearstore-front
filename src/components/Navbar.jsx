import React, { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BellIcon, ShoppingCartIcon, } from '@heroicons/react/24/outline'
import Logo from '../Logo.png'

import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { checkAuthUser, logoutUser } from '../features/user/UserSlice';

const navigation = [
  { name: 'Accueil', href: '/', current: true },
  { name: 'Catalogue', href: '/catalog', current: false },
  { name: 'Promotions', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.products.cart);
  const { notificationsList } = useSelector(state => state.notification);
  var totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (totalQuantity >= 100) {
      totalQuantity = "++";
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [open, setOpen] = useState(false);

  const togglePanel = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutEvent = () => {
    dispatch(logoutUser()).then(
      () => {
        dispatch(checkAuthUser());
        navigate('/');
      }
    );
  }

  return (
  <header className='backgroundNavbar'>
    <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">AppleEarStore</span>
          <img className="h-10 w-auto" src={Logo} alt="" />
        </Link>
        <h3 className='ml-1 font-bold text-2xl text-end'>AppleEarStore</h3>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Ouvir le menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item, index) => (
          <Link key={index} to={item.href} className="text-sm font-semibold leading-5 text-gray-900 navbarLinks">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        { user.isAuth ?
        <>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className='flex'>
          <div className='ShoppingCartBuble h-5 w-5 absolute rounded-xl ml-5'>
            <Link to='/shoppingcart' className='flex justify-center text-white'>{totalQuantity}</Link>
          </div>
          <Link
              to='/shoppingcart'
              type="button"
              className="rounded-full bg-transparent p-1 mr-2 colorText"
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <div>
      {/* Notification Button */}
      <button
        type="button"
        className="relative rounded-full bg-transparent p-1 colorText"
        onClick={togglePanel} // Toggle the panel on click
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Vos notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Slide-over Panel */}
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="leading-6 text-gray-900">
                          Notifications
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Fermer</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ul role="list" className="mt-6 space-y-6">
                      {notificationsList.length > 0 ? notificationsList.map((notification, key) => (
                        <li key={key} className="p-4 bg-black/5 divide-y divide-gray-200 border-b border-t border-gray-200 rounded-lg">
                          <a className="block truncate text-sm font-semibold leading-6 text-gray-900">
                          {notification.message}
                            <span className="absolute inset-0" />
                          </a>
                        </li>
                      )) : null}
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>

          <Menu as="div" className="relative ml-3 border-black">
            <div>
              <Menu.Button className="relative flex rounded-full border borderPrimaryColor">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile/personal-settings"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Paramètres
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={() => handleLogoutEvent()} 
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Deconnexion
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        </>
            :
            <>
            <Link to="/login" className="smallerBtn bgPrimaryColor">
            <span className='textLoginBtn'>
                    CONNEXION
            </span>
            </Link>
            <Link to="/signup" className="smallerBtn bgSecondaryColor ml-2">
              <span className='textLoginBtn'>
                    INSCRIPTION
              </span>
            </Link>
            </>
        }
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">AppleEarStore</span>
            <img
              className="h-8 w-auto"
              src={Logo}
              alt=""
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Fermer le menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item, index) => (
                <Link
                key={index}
                to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 navbarLinks text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {user.isAuth ?
            <Menu as="div" className="relative ml-3 border-black">
            <div className='flex w-full justify-end'>
              <Menu.Button className="relative flex rounded-full border borderPrimaryColor">
                <span className="absolute -inset-1.5" />
                <span className="sr-only"></span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile/personal-settings"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Paramètres
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={() => handleLogoutEvent()} 
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Deconnexion
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
            </Menu>
            : 
            <div className="py-6">
            <Link to="/login" className="smallerBtn bgPrimaryColor">
              <span>
                CONNEXION
              </span>
            </Link>
            <Link to="/signup" className="smallerBtn bgSecondaryColor ml-2">
              <span>
                INSCRIPTION
              </span>
            </Link>
            </div>}
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  );
};

export default Navbar;
