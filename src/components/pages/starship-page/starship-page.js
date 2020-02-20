import StarshipList from "../../sw-components/list/starship-list";
import StarShipDetails from '../../sw-components/details/starship-details';
import withItem from "../../hoc-helpers/with-item";

export default withItem(StarshipList, StarShipDetails, 15);