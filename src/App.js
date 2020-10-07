import { Container } from '@material-ui/core';
import React from 'react';
import Country from './Components/Country/Country';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Container>
    <div>
    <Router>
    <Header></Header>
      <Switch>
        <Route  path="/country">
        <Country></Country>
        </Route>
        <Route exact path ="/">
      <Country></Country>
      </Route>
      <Route path="/details/:countryName">
      <CountryDetails></CountryDetails>
      </Route>
      <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
      </Router>
      </div>
      </Container>
  );
}

export default App;
