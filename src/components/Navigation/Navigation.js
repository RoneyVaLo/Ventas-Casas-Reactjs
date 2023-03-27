import React from 'react'
import { NavLink } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google';

import './navigation.scss';

export default function Navigation({ logout }) {

    const logOut = () => {
        googleLogout();
        localStorage.setItem("userName", "");
        localStorage.setItem("userEmail", "");
        logout();
    };
    
    return (
        <nav className="navigation">
            <ul>
                <NavLink to="/" className="navigation__link" >Inicio</NavLink>
                <NavLink to="/sales" className="navigation__link" >Casas Disponibles</NavLink>
            </ul>
            <button onClick={logOut}>Cerrar Sesion</button>
        </nav>
    )
}
