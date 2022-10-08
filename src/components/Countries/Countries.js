import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    //Fetch data
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1>Available Countries: {countries.length}</h1>
            <div className='country-container'>
                {
                    // set a unique key for props for better performance 
                    countries.map(country => <Country
                        country = {country}
                        key = {country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;