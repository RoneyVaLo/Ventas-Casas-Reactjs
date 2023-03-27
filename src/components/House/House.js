import React from 'react';

import './house.scss';

function House({ pHouse }) {
    
    const image = pHouse.image;
    
    return (
        <div className='house'>
            <div className='house__img'>
                {image !== undefined ?<img src={pHouse.image.data} alt={pHouse.image.name}></img> : ""}
            </div>
            <div className='house__info'>
                <h1>{pHouse.title}</h1>
                <p>{pHouse.description}</p>
                <h2>${pHouse.price}</h2>
            </div>
        </div>
    )
}

export default House
