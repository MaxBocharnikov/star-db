import React from 'react';
import withSwapiService from "../../hoc-helpers/with-swapi-service";
import withData from "../../hoc-helpers/with-data";
import withChildFuntion from "../../hoc-helpers/with-child-function";
import ItemList from "../../item-list/item-list";
import compose from "../../hoc-helpers/compose";

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarShips
    }
};

const renderModelAndName = ({name, model}) => <span>{name}({model})</span>;

const StarshipList = compose(withSwapiService(mapStarshipMethodsToProps), withData, withChildFuntion(renderModelAndName))(ItemList);

export default StarshipList;