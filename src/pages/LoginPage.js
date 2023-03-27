import React from 'react'

import Login from '../components/Login/Login';

export default function LoginPage({ logIn }) {
    return (
        <div>
            <Login logIn={logIn}/>
        </div>
    )
}
