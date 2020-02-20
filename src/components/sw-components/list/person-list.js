import React from 'react';
import withData from "../../hoc-helpers/with-data";
import withChildFuntion from "../../hoc-helpers/with-child-function";
import ItemList from "../../item-list/item-list";
import withSwapiService from "../../hoc-helpers/with-swapi-service";
import compose from "../../hoc-helpers/compose";

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const renderName = ({name}) => <span>{name}</span>;

const PersonList = compose(withSwapiService(mapPersonMethodsToProps), withData, withChildFuntion(renderName))(ItemList);

export default PersonList;