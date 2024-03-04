import React from 'react'

const PersonalInformations = () => {
  return (
    <div className="col-span-2 mt-10 border border-1 border-slate-500 rounded-sm pl-5 pb-4 w-full">
        <div className='mt-2'>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nom
            </label>
            <div className="mt-2">
                <input
                type="text"
                name="name"
                id="name"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="John"
                />
            </div>
        </div>
        <div className='mt-2'>
            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                Nom de famille
            </label>
            <div className="mt-2">
                <input
                type="text"
                name="last_name"
                id="last_name"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Doe"
                />
            </div>
        </div>
        <div className='mt-2'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
            </label>
            <div className="mt-2">
                <input
                type="email"
                name="email"
                id="email"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="email@mail.com"
                />
            </div>
        </div>
        <div className='mt-2'>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Nouveau mot de passe
            </label>
            <div className="mt-2">
                <input
                type="password"
                name="password"
                id="password"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="********"
                />
            </div>
        </div>
        <div className='mt-2 mb-4'>
            <label htmlFor="repeat_password" className="block text-sm font-medium leading-6 text-gray-900">
                Repetez le mot passe
            </label>
            <div className="mt-2">
                <input
                type="password"
                name="repeat_password"
                id="repeat_password"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="********"
                />
            </div>
        </div>
        <div className='pt-4 border-t-[1px] border-black/10 mr-4'>
            <label htmlFor="repeat_password" className="block text-sm font-medium leading-6 text-gray-900">
                Repetez le mot passe
            </label>
            <div className="mt-2">
                <input
                type="password"
                name="repeat_password"
                id="repeat_password"
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="********"
                />
            </div>
        </div>
        <button className="smallerBtn bgPrimaryColor mt-4">
            <span className='textLoginBtn'>
                Enregistrer
            </span>
        </button>
    </div>
  )
}

export default PersonalInformations