import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'

export default function SignIn() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const submitLogin = async () => {
      let user = {email, password}
      try {
        const response = await fetch(`http://localhost:3001/api/users/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
          });
        const login = await response.json()
        console.log(login)
      } catch (err) { console.log(err)}
  }

  return (
/*       <>
        {
            localStorage.BUDGET_APP_TOKEN ? 
            <Redirect to='/dashboard' /> : */
        <div className="SignIn">
          <input
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
          />
          <input
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
          />
          <button type="submit" onClick={() => submitLogin()}>Sign In</button>
{/*         {
            Object.keys(login).length && login.status === 'success' ? <Redirect to='/dashboard' /> : <Redirect to='/' />
        } */}
        </div>
/* }
      </> */
  );
}
