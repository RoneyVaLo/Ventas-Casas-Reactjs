import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import './login.scss';

export default function Login({ logIn }) {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            console.log(profile);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log(res.data);
                        logIn(res.data.name, res.data.email);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user, logIn]
    );


    return (
        <div className="login">
            {user ? <button onClick={() => { login() }}>Iniciar Sesion con Google</button> : ""}
        </div>
    );
}
