import React from 'react';
import {Link} from 'react-router-dom';

import './coffeeItem.scss';

const CoffeeItem = ({items}) => {
    const {id, title, url, price, country, category} = items
    const countryView = category === 'best' ? null : <div className="coffeeItem__country">{country}</div>;
    return (
        <Link to={`/${id}`} className="coffeeItem__link">
            <div className="coffeeItem">
                <div className="coffeeItem__img">
                    <img src={url} alt="coffee"/>
                </div>
                <h2 className="coffeeItem__title">{title}</h2>
                <div className="coffeeItem__price">{`${price}$`}</div>
                {countryView}
            </div>
        </Link>
    );
};

export default CoffeeItem;