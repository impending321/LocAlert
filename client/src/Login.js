import React, { useState,useContext } from 'react';
import axios from 'axios';
import UserContext from "./UserContext.js";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const user = useContext(UserContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isLogin) {
            const data = { username, email, password, location }
            axios.post('http://localhost:4000/signup', data, {withCredentials: true})
            .then(() => user.setUser({username}))
        }
    };
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {isLogin ? 'Log in to your account' : 'Create a new account'}</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="user-name" className="sr-only">User Name</label>
                                <input id="user" name="user" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
                                focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none
                                focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                                focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setIsLogin(!isLogin)}>
                                    {isLogin ? 'Create an account' : 'Log in'}
                                </button>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M3 4.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-1H4v13h12v-5a.5.5 0 011 0v6a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-15zM15 3v2.586l-6.293 6.293a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707L12.293 4H10.5a.5.5 0 010-1h4a.5.5 0 01.5.5z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                {isLogin ? 'Log in' : 'Sign up'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default Login;
