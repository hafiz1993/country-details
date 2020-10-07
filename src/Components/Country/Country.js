import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard/CountryCard';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/all/`)
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])
    return (
        <div >
            

    <div style={{ flexWrap: "wrap", display:"flex", paddingLeft:"100px", paddingTop:"20px"}}>
    {
        countries.map(country => <CountryCard country={country}></CountryCard>)
    }
    </div>
            
        </div>
    );
};

export default Country;