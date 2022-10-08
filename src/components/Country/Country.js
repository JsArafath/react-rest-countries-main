import React from 'react';
import './Country.css';
const Country = (props) => {
    //Destructuring nested object
    const {name:{common}, population, area, flags, region, capital} = props.country;
    const imgSrc = flags.png;
    return (
        <div className='country'>
            <h1>Country: {common}</h1>
            <h3>Capital: {capital} </h3>
            <img src={imgSrc} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p> Region: {region} </p>
        </div>
    );
};

export default Country;



