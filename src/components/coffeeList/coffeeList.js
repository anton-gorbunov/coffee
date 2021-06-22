import React from 'react';
import CoffeeItem from '../coffeeItem/coffeeItem';

import './coffeeList.scss';

const CoffeeList = ({coffeeItems}) => {
    const items = coffeeItems.map(item => {
        return (
            <li key={item.id} className="coffeeList__item">
                <CoffeeItem items={item}/>
            </li>
        );
    });
    return (
        <ul className="coffeeList">
            {items}
        </ul>
    );
};

export default CoffeeList;