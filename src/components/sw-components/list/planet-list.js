import React from 'react';
import withSwapiService from "../../hoc-helpers/with-swapi-service";
import withData from "../../hoc-helpers/with-data";
import withChildFuntion from "../../hoc-helpers/with-child-function";
import ItemList from "../../item-list/item-list";
import compose from "../../hoc-helpers/compose";


const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const renderName = ({name}) => <span>{name}</span>;

const Planetlist = compose(withSwapiService(mapPlanetMethodsToProps), withData, withChildFuntion(renderName))(ItemList);

export default Planetlist;

