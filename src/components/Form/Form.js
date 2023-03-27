import React, { useState } from 'react'
import Map from '../Map/Map';

import './form.scss';

export default function Form() {

    const [mapCoordinates, setMapCoordinates] = useState({});

    let newHouse = {};
    let houses = (localStorage.houses !== undefined) && (localStorage.houses !== '') ? JSON.parse(localStorage.houses) : [];

    const handleAddCoordinates = (lat, lgn) => {
        const coordinates = {
            lat: lat,
            lng: lgn
        };
        setMapCoordinates(coordinates);
    };

    const saveDataHouses = () => {
        const housesJSON = JSON.stringify(houses);
        localStorage.setItem('houses', housesJSON);
    };

    const handleAddHouse = (e) => {
        e.preventDefault();

        newHouse = {
            id: houses.length,
            title: e.target.title.value,
            description: e.target.description.value,
            price: e.target.price.value,
            address: mapCoordinates,
        };

        let imageData = {};
        const reader = new FileReader();
        reader.readAsDataURL(e.target.image.files[0]);
        reader.onloadend = () => {
            imageData = {
                name: e.target.image.files[0].name,
                type: e.target.image.files[0].type,
                size: e.target.image.files[0].size,
                data: reader.result
            };

            newHouse.image = imageData;
            const newHouses = [...houses, newHouse];
            houses = newHouses;

            saveDataHouses();
            
            alert("Casa Agregada con Éxito");
            e.target.title.value = "";
            e.target.description.value = "";
            e.target.price.value = "";
            e.target.image.value = "";
            setMapCoordinates({});
        };
    };

    return (
        <div>
            <form className="form" onSubmit={handleAddHouse}>
                <h1 className='form__title'>Publicar Casa</h1>
                <div className="form__container">
                    <div className="form__group">
                        <input type="text" name="title" id="title" className="form__group-input" autoComplete="off" placeholder=" " required />
                        <label htmlFor="title" className="form__group-label">Titulo:</label>
                        <span className="form__group-line"></span>
                    </div>

                    <div className="form__group">
                        <input type="text" name="description" id="description" className="form__group-input description" autoComplete="off" placeholder=" " required />
                        <label htmlFor="description" className="form__group-label">Descripción:</label>
                        <span className="form__group-line"></span>
                    </div>

                    <div className="form__group">
                        <input type="number" name="price" id="price" className="form__group-input" autoComplete="off" placeholder=" " required />
                        <label htmlFor="price" className="form__group-label">Precio:</label>
                        <span className="form__group-line"></span>
                    </div>

                    <div className="form__group">
                        <input type="file" name="image" id="image" className="form__group-input image" required />
                        <label htmlFor="image" className="form__group-label">Imagen:</label>
                    </div>

                    <div className='form__map'>
                        <Map handleCoordinates={handleAddCoordinates} />
                    </div>

                    <input type="submit" className="form__submit" value="Publicar Casa"></input>
                </div>
            </form>
        </div>
    )
}
