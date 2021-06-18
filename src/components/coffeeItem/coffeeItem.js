import React from 'react';
import {Link} from 'react-router-dom';

import './coffeeItem.scss';

const CoffeeItem = () => {
    return (
        <Link to="/coffeeItemPage" className="coffeeItem__link">
            <div className="coffeeItem">
                <div className="coffeeItem__img">
                    <img src="" alt="coffee"/>
                </div>
                <h2 className="coffeeItem__title"></h2>
                <div className="coffeeItem__price"></div>
            </div>
        </Link>
    );
};

export default CoffeeItem;