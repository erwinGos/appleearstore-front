import React, { useEffect, useState } from 'react';
import { QuestionMarkCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { getMyAddresses } from '../../features/address/AddressSlice';
import { createOrder } from '../../features/order/OrderSlice';


import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

import AnimatedPage from '../AnimatedPage';
import SelectAddress from './SelectAddress';

export default function ShoppingCart() {
  const cart = useSelector(state => state.products.cart);
  let sousTotal = cart.reduce((accumulator, currentValue) => {
    return (currentValue.product.priceWithoutTax * currentValue.quantity) + accumulator;
  }, 0);
  let sousTotalTTC = cart.reduce((accumulator, currentValue) => {
    return (currentValue.product.price * currentValue.quantity) + accumulator;
  }, 0);
  let tva = sousTotalTTC - sousTotal;
  let fraisDeLivraison = sousTotal > 0 ? 5 : 0;
  let totalCommande = sousTotalTTC + fraisDeLivraison;

  const dispatch = useDispatch();
  const addresses = useSelector(state => state.address);
  const [checkConditions, setCheckConditions] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null)
  const {error} = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getMyAddresses());
  }, [])


  const CreateNewOrder = (e) => {
    e.preventDefault();
    if(!checkConditions) {
      return toast.error("Vous devez accepter les conditions avant de pouvoir procéder au paiement.");
    }

    if(!selectedAddress) {
      return toast.error("Veuillez choisir une adresse.");
    }
    let preparedProducts = []
    cart.forEach(cartItem => {
      let item = {
        productId : cartItem.product.id,
        quantity: cartItem.quantity,
        colorName: cartItem.colorName
      };
      preparedProducts.push(item);
    });
    dispatch(createOrder({addressId: selectedAddress.id, products: preparedProducts})).then((res) => {
      console.log(res)
      if(!res.error) {
        window.open(res.payload.stripePaymentUrl, '_blank');
      }
      
    });
  }


  return (
    <div className="backgroundPrimarySection">
      <Toaster
          position="top-left"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: 'Toaster',
            duration: 1000,
            success: {
              duration: 1500,
              iconTheme: {
                primary: '#FFF',
                secondary: 'black',
              },
            },
          }}
      />
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Votre panier</h1>
        <form onSubmit={(e) => CreateNewOrder(e)} className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Produits dans votre panier
            </h2>
            <AnimatedPage>
            <ul role="list" className="p-4 bg-white divide-y divide-gray-200 border-b border-t border-gray-200 rounded-lg">
              {Array.isArray(cart) && cart.length > 0 ? (
                      cart.map((cart, index) => (
                    <li key={cart.product.id} className="flex py-6 sm:py-10">
                      <CartItem cart={cart} index={index} />
                    </li>
                ))
                ) : (
                    <p>Aucun produit dans le panier.</p>
                )}
            </ul>
            </AnimatedPage>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-white px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            {error&&  (
              <div className="rounded-md bg-red-50 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Une erreur est survenue</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul role="list" className="list-disc space-y-1 pl-5">
                        <li>{error}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
           <AnimatedPage>
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Résumé de la commande
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Sous total</dt>
                <dd className="text-sm font-medium text-gray-900">{sousTotal.toFixed(2)} €</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Frais de livraison</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Savoir comment la livraison est calculé</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">{fraisDeLivraison.toFixed(2)} €</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>TVA</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Savoir comment la taxe est calculé</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">{tva.toFixed(2)} €</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total de la commande</dt>
                <dd className="text-base font-medium text-gray-900">{totalCommande.toFixed(2)} €</dd>
              </div>
            </dl>
            <div className="mt-6">
              {addresses.addresses.length > 0 ? <SelectAddress selected={selectedAddress} setSelected={setSelectedAddress} addresses={addresses.addresses}/> : null}
            </div>
            <div className="relative flex items-start mt-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 secondaryText focus:ring-0 focus:none"
                  checked={checkConditions}
                  onChange={(e) => setCheckConditions(e.target.checked)}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Acceptez les conditions de vente.
                </label>{' '}
                <span id="comments-description" className="text-gray-500">
                  <span className="sr-only">Acceptez les conditions de vente. </span>Pour plus d'information renseignez-vous en pied de page.
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className='mainButton bgPrimaryColor'>
                <span>
                  COMMANDER
                </span>
              </button>
            </div>
            </AnimatedPage>
          </section>
        </form>
      </div>
    </div>
  )
}
