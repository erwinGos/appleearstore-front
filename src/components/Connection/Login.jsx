import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { XCircleIcon } from '@heroicons/react/20/solid';

import AnimatedPage from '../AnimatedPage';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/user/UserSlice';

const Login = () => {

  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // redux state
  const {loading, error} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();

    let userCredentials = {
      email,
      password
    }

    dispatch(loginUser(userCredentials)).then((result) => {
      if(result.payload && result.error == null) {
        setEmail('');
        setPassword('');
        navigate('/');
      }
    })
  }

  return (
    <section className="pt-16 pb-20 backgroundLogin">
      <div className='text-center mx-auto max-w-80'>
        <h2>Connexion</h2>
        <div className='mt-14'>
        <AnimatedPage>
          <form onSubmit={handleLoginEvent}>
          {error&&(
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
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="inputBorderColor mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Mot de passe"
            />
            <p className='text-left mt-2 mb-12'>Pas encore de compte ? <Link to="/signup" className='font-bold hover:opacity-80'>Inscrivez-vous ici !</Link></p>
            <button type='submit' className='mx-auto mainButton bgPrimaryColor'>
              {loading? 'Chargement...':'CONNEXION'}
            </button>            
          </form>
        </AnimatedPage>
      </div>
      </div>
    </section>
  );
};

export default Login;