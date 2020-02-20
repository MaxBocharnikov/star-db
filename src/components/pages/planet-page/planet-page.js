
import Planetlist from "../../sw-components/list/planet-list";
import PlanetDetails from "../../sw-components/details/planet-detail";
import withItem from "../../hoc-helpers/with-item";

export default withItem(Planetlist, PlanetDetails, 2);