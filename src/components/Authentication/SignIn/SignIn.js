import React from 'react'

export default function SignIn() {
    return (
        <div className="SignIn">
            <form className="signIn-form">
                <input type="text" name="username" placeholder="User Name" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
