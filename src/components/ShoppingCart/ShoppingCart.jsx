import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
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

  return (
    <div className="backgroundPrimarySection">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Votre panier</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
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
              <SelectAddress />
            </div>
            <div className="mt-6">
              <Link className='mainButton bgPrimaryColor'>
                <span>
                  COMMANDER
                </span>
              </Link>
            </div>
            </AnimatedPage>
          </section>
        </form>
      </div>
    </div>
  )
}
