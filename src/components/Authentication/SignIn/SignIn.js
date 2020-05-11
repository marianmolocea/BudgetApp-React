import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'

export default function SignIn() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [login, setLogin] = useState({})

  const submitLogin = async () => {
      let user = {email, password}
      let response = await fetch(`http://localhost:3001/api/users/login`, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(user)
        });
        let data = await response.json()
        storeToken(data)
        setLogin(data)
  }

  const storeToken = (data) => {
      if(!localStorage.BUDGET_APP_TOKEN) { 
        localStorage.setItem("BUDGET_APP_TOKEN", data.token)
    }
  }

  return (
      <>
        {
            localStorage.BUDGET_APP_TOKEN ? 
            <Redirect to='/dashboard' /> :
        <div className="SignIn">
            
        <input
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button onClick={() => submitLogin()}>Sign In</button>
        {
            Object.keys(login).length && login.status === 'success' ? <Redirect to='/dashboard' /> : <Redirect to='/' />
        }
        </div>
}
      </>
  );
}
