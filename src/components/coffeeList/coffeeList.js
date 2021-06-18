import React from 'react';
import CoffeeItem from '../coffeeItem/coffeeItem';

import './coffeeList.scss';

const CoffeeList = () => {
    return (
        <ul className="coffeeList">
            <li className="coffeeList__item">
                <CoffeeItem/>
            </li>
            <li className="coffeeList__item">
                <CoffeeItem/>
            </li>
            <li className="coffeeList__item">
                <CoffeeItem/>
            </li>
        </ul>
    );
};

export default CoffeeList;