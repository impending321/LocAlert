import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import HomePage from './HomePage.js';
import axios from 'axios';
import UserContext from './UserContext.js';
import AuthContext from './AuthContext.js';
function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({})
  function logout() {
    axios.post('http://localhost:4000/logout', {}, {withCredentials: true})
    .then(() => setUser({}))
  }
  useEffect(() => {
    axios.get('http://localhost:4000/user', { withCredentials: true })
      .then(res => setUser(res.data));
  }, [])
  return (
    <AuthContext.Provider value={{ auth,setAuth}}>
    <UserContext.Provider value={{ ...user,logout,setUser }}>
      {(!auth && <HomePage />) ||
      (auth && <Login />)}
    </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
