import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));



const CountryDetails = () => {
    const classes = useStyles();
    const { countryName } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data[0]));
    }, [countryName])

    console.log(details);
    return (
        < div className={classes.root} style={{paddingTop:"50px"}}>
            
            <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}><img src={details.flag} alt="" style={{height:"400px", width:"550px"}}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            
        <Paper className={classes.paper} style={{color:"black", textAlign: "justify"}}> 
    <h1 style={{textAlign: "center"}}>{countryName}</h1>
   
    <ol>    <li>Capital : {details.capital}</li>
            <li>Region : {details.region}</li>
            <li>Sub-Region : {details.subregion}</li>
            <li>Timezone : {details.timezones}</li>  
            <li>Population : {details.population}</li> 
            <li>NumericCode : {details.numericCode}</li>  
            <li>NativeName : {details.nativeName}</li>   
            <li>alpha2Code : {details.alpha2Code}</li>
            <li>altSpellings : {details.altSpellings}</li>
            <li>area: : {details.area}</li>
            <li>borders : {details.borders}</li> 
            
            </ol>
        </Paper>
        </Grid>
         </Grid>
        </div>
        
    );
};
export default CountryDetails;