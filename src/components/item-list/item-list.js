import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = props => {
    const {data, children, onItemSelected} = props;

    const renderItems = arr => {
        const renderItem = children;
        return arr.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => onItemSelected(item.id)}
                >
                    {renderItem(item)}
                </li>
            )
        })
    };

    const renderedItemList = renderItems(data);
    return (
        <ul className="item-list list-group">
            {renderedItemList}
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;