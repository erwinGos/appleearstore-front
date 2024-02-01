import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="pt-16 pb-24 backgroundLogin">
      <div className='text-center mx-auto max-w-80'>
        <h2>Connexion</h2>
        <div className='mt-14'>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="inputBorderColor block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
          <p className='text-left mt-2 mb-12'>Pas encore de compte ? <Link to="/signup" className='font-bold hover:opacity-80'>Inscrivez-vous ici !</Link></p>
          <Link to="/login" className='mx-auto mainButton bgPrimaryColor'>
              <span>
                  CONNEXION
              </span>
          </Link>
      </div>
      </div>
    </section>
  );
};

export default Login;