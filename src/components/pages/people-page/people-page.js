import {PersonList} from '../../sw-components/list/item-lists';
import {PersonDetails} from '../../sw-components/details/details';
import withItem from "../../hoc-helpers/with-item";

export default withItem(PersonList, PersonDetails, 1);
