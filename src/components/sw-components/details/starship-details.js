import React from 'react';
import ItemDetails, {Record} from "../../item-details/item-details";
import withSwapiService from "../../hoc-helpers/with-swapi-service";
import compose from "../../hoc-helpers/compose";

const StarShipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarShip,
        getImageUrl: swapiService.getStarShipImage
    }
};


export default compose(withSwapiService(mapMethodsToProps))(StarShipDetails);