import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../Country/CountryCard/CountryCard';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [details, setDetails] = useState({});
useEffect(() => {
    const url =`https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>setDetails(data));
}, [])
  
    
    return (
        <div style={{textAlign:"center"}}>
            <h1 >{countryName}</h1>
    
    
            
    
        </div>
    );
};

export default CountryDetails;