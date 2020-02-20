import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi.service';
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';

export default  class App extends Component {

    swapiService = new SwapiService();

   render() {
       return (
           <SwapiServiceProvider value={this.swapiService}>
               <div>
                   <Header />
                   <RandomPlanet/>
                   <PeoplePage/>
                   <PlanetPage/>
                   <StarshipPage/>
               </div>
           </SwapiServiceProvider>
       );
   }
};
