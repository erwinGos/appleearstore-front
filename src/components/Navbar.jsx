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
  var totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (totalQuantity >= 100) {
      totalQuantity = "++";
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <button
            type="button"
            className="relative rounded-full bg-transparent p-1 colorText"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Menu as="div" className="relative ml-3 border-black">
            <div>
              <Menu.Button className="relative flex rounded-full border borderPrimaryColor">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Settings
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
                      Sign out
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
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  );
};

export default Navbar;
