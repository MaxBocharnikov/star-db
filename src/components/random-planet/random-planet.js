import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi.service';
import './random-planet.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 5000
    };

    static propTypes = {
      updateInterval: PropTypes.number
    };

  swapiService = new SwapiService();
  interval = null;

  state = {
    loaded: false,
    error: false,
    planet: {}
  };

  componentDidMount() {
     const {updateInterval} = this.props;
      this.updatePlanet();
      this.interval = setInterval(() => {
          this.updatePlanet();
      }, updateInterval)
  }

  onPlanetLoaded = (planet) => {
      this.setState({planet, loaded: true});
  };

  onError = (err) => {
    this.setState({
        error: true,
        loaded: true
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 11) + 1;
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {planet, loaded, error} = this.state;
    const spinner = !loaded ? <Spinner/> : null;
    const content = loaded && !error ? <PlanetView planet={planet} /> : null;
    const errorIndicator = error ? <ErrorIndicator/> : null;
    return (
      <div className="random-planet jumbotron rounded">
          {spinner}
          {content}
          {errorIndicator}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           alt="random-planet-img"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
};

