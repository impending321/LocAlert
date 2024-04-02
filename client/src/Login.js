import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from "./UserContext.js";
import AuthContext from './AuthContext.js';
import image from './assets/LocAlert(LOGO).jpg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isError, setIsError] = useState(false);
    const user = useContext(UserContext);
    const auth = useContext(AuthContext);

    const exampleCities = ['New York', 'Los Angeles', 'London', 'Paris', 'Tokyo'];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isLogin) {
            const data = { username, email, password, location };
            axios.post('http://localhost:4000/signup', data, { withCredentials: true })
                .then(() => { user.setUser({ username }); auth.setAuth(false); })
                .catch(error => {
                    setIsError(true);
                });
        } else {
            const data = { username, password }
            axios.post('http://localhost:4000/login', data, { withCredentials: true })
                .then(() => { user.setUser({ username }); auth.setAuth(false); })
                .catch(error => {
                    setIsError(true);
                });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-24 w-auto" src={image} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-logodark">
                        {isLogin ? 'Log in to your account' : 'Create a new account'}</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="user-name" className="sr-only">User Name</label>
                            <input id="user" name="user" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
                                focus:ring-logodark focus:border-logodark focus:z-10 sm:text-sm" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        {!isLogin && (
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none
                                    focus:ring-logodark focus:border-logodark focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        )}
                        {isLogin &&(
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                                focus:ring-logodark rounded-b-md focus:border-logodark focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        )}
                        {!isLogin &&(
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none 
                                    focus:ring-logodark  focus:border-logodark focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            )}
                        {!isLogin && (
                            <div>
                                <label htmlFor="location" className="sr-only">Location</label>
                                <select
                                    id="location"
                                    name="location"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                                    focus:ring-logodark focus:border-logodark focus:z-10 sm:text-sm"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    <option value="" className="text-gray-500">Select Location</option>
                                    {exampleCities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-center w-full">
                        <button type="button" className="font-medium text-logodark border-solid border-logoyellow hover:text-logodark border h-[40px] w-[150px] rounded-md" onClick={() => setIsLogin(!isLogin)}>
                             {isLogin ? 'Create an account' : 'Log in'}
                        </button>
                        </div>
                    </div>
                    {isError && (
                        <div className="text-center">
                            <p className="text-red-500">{isLogin ? "Invalid Username or Password" : "Username or Email Already Exists"}</p>
                        </div>
                    )}
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-logoyellow hover:bg-logoyellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logodark">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-white group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
