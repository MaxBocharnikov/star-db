
class SwapiService {
    _apiBase = 'https://swapi.co/api';

    _imageBase = 'https://starwars-visualguide.com/assets/img';

    async getResource(url) {
        //const prourl = "https://cors-anywhere.herokuapp.com/";
        const res = await fetch(this._apiBase + url);
        if (!res.ok) {
            throw new Error('Error');
        }
        const body = await res.json();
        return body;
    };

     getAllPeople =  async () => {
        const res = await this.getResource('/people');
        return res.results.map(this._transformPerson);
    }

     getPerson = async(id) => {
        const res = await this.getResource(`/people/${id}`);
        return this._transformPerson(res);
    }

     getAllPlanets = async () => {
        const res = await this.getResource('/planets');
        return res.results.map(this._transformPlanet);
    }

     getPlanet = async (id) => {
        const res = await this.getResource(`/planets/${id}`);
         return this._transformPlanet(res);
    }

     getAllStarShips = async () => {
        const res = await this.getResource('/starships');
        return res.results.map(this._transformStarShip);
    }

     getStarShip = async (id) => {
        const res = await this.getResource(`/starships/${id}`);
        return this._transformStarShip(res);
    }

    _extractId(item) {
        const idReg = /\/([0-9]*)\/$/;
        return item.url.match(idReg)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarShip = (starShip) => {
        return {
            id: this._extractId(starShip),
            name: starShip.name,
            model: starShip.model,
            manufacture: starShip.manufacture,
            costInCredits: starShip.costInCredits,
            length: starShip.length,
            crew: starShip.crew,
            passengers: starShip.passengers,
            cargoCapacity: starShip.cargoCapacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    getPersonImage = (id) => {
         return `${this._imageBase}/characters/${id}.jpg`;
    }

    getPlanetImage = (id) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }

    getStarShipImage = (id) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    }

}

export default SwapiService;