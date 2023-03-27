import React from 'react';
import House from '../components/House/House';

// import Casa1 from '../img/casa1.png';

export default function Login() {

    const housesJSON = localStorage.houses;
    
    const houses = ((housesJSON !== undefined) && (housesJSON !== '')) ? JSON.parse(housesJSON) : "";

    return (
        <div>
            {houses.length > 0 ? houses.map((house, index) => (
                <House pHouse={house} key={index} />
            )) : (
                <div>
                    <h1>NO HAY CASAS DISPONIBLES DE MOMENTO</h1>
                </div>
            )}
        </div>
    )
}