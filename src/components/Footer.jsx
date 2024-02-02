import React from 'react';
import { Link } from 'react-router-dom';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytique', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Perspectives', href: '#' },
  ],
  support: [
    { name: 'Tarification', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Statut de l’API', href: '#' },
  ],
  company: [
    { name: 'À propos', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Emplois', href: '#' },
    { name: 'Presse', href: '#' },
    { name: 'Partenaires', href: '#' },
  ],
  legal: [
    { name: 'Réclamation', href: '#' },
    { name: 'Confidentialité', href: '#' },
    { name: 'Conditions', href: '#' },
  ],
}

const Footer = () => {
    return (
      <footer className="backgroundSecondarySection" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto p-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="footerLinks">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="footerLinks">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="footerLinks">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="footerLinks">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-0">
              <h3 className="text-sm font-semibold leading-6">S'abonner à notre newsletter</h3>
              <p className="mt-2 text-sm leading-">
                Les dernières actualités, articles, et ressources, envoyés sur votre boite mail toutes les semaines.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                    Adresse mail
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Votre adresse mail"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Link className='smallerBtn bgPrimaryColor'>S'abonner</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="">
            <p className="mt-8">
              &copy; 2020 Appleearstore, Inc. All rights reserved.
            </p>
        </div>
        </div>
      </footer>
    )
}
export default Footer;
