import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner/spinner';

const Record = ({itemDetails, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{itemDetails[field]}</span>
        </li>
    )
};

export {
    Record
}

export default class ItemDetails extends Component {

    state = {
    itemDetails: null,
    loading: null,
    image: null,
  };

  componentDidMount() {
      this.fetchPersonDetails();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.itemId !== this.props.itemId) {
      this.fetchPersonDetails();
    }
  }

  fetchPersonDetails = () => {
    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId) return;

    this.setState({
        loading: true
    });
      getData(itemId)
        .then(itemDetails => {
          this.setState({
              itemDetails,
              loading: false,
              image: getImageUrl(itemId)
          })
        })
  };


  render() {
    const {itemDetails, loading, image} = this.state;
    if(!itemDetails && !loading) return null;
    if(loading) return <Spinner/>
    const {name} = itemDetails;
    return (
      <div className="item-details card">
          <img alt="item-details-image" className="item-image" src={image}/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, {itemDetails})
              })}
          </ul>
        </div>
      </div>
    )
  }
}
