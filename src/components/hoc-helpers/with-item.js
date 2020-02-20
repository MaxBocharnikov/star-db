import React, {Component} from 'react';
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";

const withItem = (List, Details, defaultItemId) => {
    return class extends Component {
        state = {
            selectedItem: defaultItemId
        };

        onItemSelected = id => {
            if(!id) return;
            this.setState({
                selectedItem: id
            })
        };

        render() {
            const itemList = (
                <List onItemSelected = {this.onItemSelected}/>
            );
            const details = (
                <Details itemId={this.state.selectedItem}/>
            )
            return (
                <ErrorBoundry>
                    <Row left = {itemList} right = {details}/>
                </ErrorBoundry>
            )
        }
    }
};

export default withItem;