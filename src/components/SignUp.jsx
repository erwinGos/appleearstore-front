import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';

import AnimatedPage from '../components/AnimatedPage';
import { signUpUser } from '../features/user/UserSlice';

const Login = () => {
  // states
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [password, setPassword] = useState('');

  // redux state
  const {loading, error} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();

    let userInformations = {
      email,
      password,
      name,
      lastName
    }

    dispatch(signUpUser(userInformations)).then((result) => {
      if(result.payload && result.error == null) {
        setLastName('');
        setName('');
        setEmail('');
        setPassword('');
        setCheckPassword('');
        navigate('/');
      }
    })
  }
  return (
    <section className="sm:pl-0 sm:pr-0 pl-4 pr-4 pt-16 pb-20 backgroundSignUp">
      <div className='text-center mx-auto max-w-96'>
        <AnimatedPage>
          <h2>Inscription</h2>
          <div className='mt-14'>
          <form onSubmit={handleLoginEvent}>
          <label htmlFor="lastname" className="sr-only">
              Nom
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="firstname"
              className="inputBorderColor mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="prénom"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
              type="password"
              name="repeatpassword"
              id="repeatpassword"
              className="inputBorderColor mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Mot de passe"
            />
            <p className='text-left mt-2 mb-12'>Vous avez déjà un compte ? <Link to="/login" className='font-bold hover:opacity-80'>Conntectez-vous !</Link></p>
            <button type='submit' className='mx-auto mainButton bgPrimaryColor'>
              {loading? 'Chargement...':'INSCRIPTION'}
            </button>
            {error&&(
              <div className="rounded-md bg-red-50 p-4 mt-4">
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
          </form>
        </div>
        </AnimatedPage>
      </div>
    </section>
  );
};

export default Login;