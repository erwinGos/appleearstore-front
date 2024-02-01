import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="pt-16 pb-24 backgroundSignUp">
      <div className='text-center mx-auto max-w-96'>
        <h2>Inscription</h2>
        <div className='mt-14'>
        <label htmlFor="lastname" className="sr-only">
            Nom
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="inputBorderColor block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Nom"
          />
           <label htmlFor="firstname" className="sr-only">
            Prénom
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="inputBorderColor mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="prénom"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="inputBorderColor mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
          <label htmlFor="password" className="sr-only">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="inputBorderColor mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Mot de passe"
          />
          <label htmlFor="password" className="sr-only">
           Répetez le mot de passe
          </label>
          <input
            type="password"
            name="repeatpassword"
            id="repeatpassword"
            className="inputBorderColor mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Mot de passe"
          />
          <p className='text-left mt-2 mb-12'>Vous avez déjà un compte ? <Link to="/login" className='font-bold hover:opacity-80'>Conntectez-vous ici !</Link></p>
          <Link className='mx-auto mainButton bgPrimaryColor'>
              <span>
                  INSCRIPTION
              </span>
          </Link>
      </div>
      </div>
    </section>
  );
};

export default Login;