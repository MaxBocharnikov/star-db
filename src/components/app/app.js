import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi.service';
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {StarShipDetails} from '../sw-components/details/details';

export default  class App extends Component {

    swapiService = new SwapiService();

   render() {
       return (
           <SwapiServiceProvider value={this.swapiService}>
               <Router>
                   <Header />
                   <RandomPlanet/>
                   <Route path="/" exact render={() => <h2>Welcome to StarDB</h2>}/>
                   <Route path="/people" component={PeoplePage}/>
                   <Route path="/planets" component={PlanetPage}/>
                   <Route path="/starships" exact component={StarshipPage}/>
                   <Route path="/starships/:id" render={({match}) =>
                   {
                       const id = match.params.id;
                      return <StarShipDetails itemId={id}/>
                   }
                   }/>
               </Router>
           </SwapiServiceProvider>
       );
   }
};
