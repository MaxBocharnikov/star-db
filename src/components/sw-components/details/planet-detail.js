import React from 'react';
import ItemDetails, {Record} from "../../item-details/item-details";
import withSwapiService from "../../hoc-helpers/with-swapi-service";
import compose from "../../hoc-helpers/compose";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};


export default compose(withSwapiService(mapMethodsToProps))(PlanetDetails);