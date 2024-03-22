import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateUser } from "../../features/user/UserSlice";
import toast, { Toaster } from 'react-hot-toast';

const PersonalInformations = () => {

    const users = useSelector(state => state.user);
    const [userForm, setUserForm] = useState(users.user);
    const dispatch = useDispatch();

    const updateUserRequest = (e) => {
        e.preventDefault();
        if(userForm.oldPassword) {
            if(userForm.password) {
                if(userForm.password == userForm.repeatPassword) {
                    dispatch(UpdateUser(userForm)).then((res) => {
                        if(res.payload.message) {
                            return toast.error(res.payload.message);
                        }
                        toast.success("Modifications enregistrées.")
                    });
                }
            } else {
                dispatch(UpdateUser(userForm)).then((res) => {
                    if(res.payload.message) {
                        return toast.error(res.payload.message);
                    }
                    toast.success("Modifications enregistrées.")
                });
            }
        } else {
            toast.error("Veuillez renseigner l'ancien mot de passe.")
        }
    }

    return (
        <div className="col-span-2 mt-10 border border-1 border-slate-500 rounded-sm pl-5 pb-4 w-full">
            <Toaster
                position="top-left"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: 'Toaster',
                    duration: 1000,

                    // Default options for specific types
                    success: {
                        duration: 1500,
                        iconTheme: {
                        primary: '#FFF',
                        secondary: 'black',
                        },
                    },
                }}
            />
            <form onSubmit={(e) => updateUserRequest(e)}>
                <div className='mt-2'>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Nom
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="name"
                        value={userForm.name}
                        onChange={(e) => setUserForm({...userForm, name: e.target.value})}
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
                        value={userForm.lastName}
                        onChange={(e) => setUserForm({...userForm, lastName: e.target.value})}
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
                        value={userForm.email}
                        onChange={(e) => setUserForm({...userForm, email: e.target.value})}
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
                        value={userForm.password ?? ""}
                        onChange={(e) => setUserForm({...userForm, password: e.target.value})}
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
                        value={userForm.repeatPassword ?? ""}
                        onChange={(e) => setUserForm({...userForm, repeatPassword: e.target.value})}
                        id="repeat_password"
                        className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="********"
                        />
                    </div>
                </div>
                <div className='pt-4 border-t-[1px] border-black/10 mr-4'>
                    <label htmlFor="current_password" className="block text-sm font-medium leading-6 text-gray-900">
                        Mot de passe actuel
                    </label>
                    <div className="mt-2">
                        <input
                        type="password"
                        name="current_password"
                        value={userForm.oldPassword ?? ""}
                        onChange={(e) => setUserForm({...userForm, oldPassword: e.target.value})}
                        id="current_password"
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
            </form>
        </div>
    )
}

export default PersonalInformations