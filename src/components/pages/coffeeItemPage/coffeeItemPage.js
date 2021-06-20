import React from 'react';
import useLoadingData from '../../useLoadingData/useLoadingData';
import Spinner from '../../spinner/spinner';
import Divider from '../../divider/divider';

import './coffeeItemPage.scss';

const CoffeeItemPage = ({match}) => {
    const {loading, items} = useLoadingData();
    if (loading) {
        return (
            <Spinner/>
        );
    }
    const item = items.find(item => item.id === +match.params.id);
    const {title, url, country, description, price} = item;
    return (
        <>
            <section className="coffeeItemPage">
                <div className="container">
                    <div className="coffeeItemPage__wrapper">
                        <img className="coffeeItemPage__img" src={url}alt="coffeeItem"/>
                        <div className="coffeeItemPage__text">
                            <h2 className="coffeeItemPage__title">{title}</h2>
                            <Divider classList="line line_black"/>
                            <div className="coffeeItemPage__country">
                                <span className="coffeeItemPage__bold">Country</span>: {country}
                            </div>
                            <div className="coffeeItemPage__descr">
                            <span className="coffeeItemPage__bold">Description: </span> {description}
                            </div>
                            <div className="coffeeItemPage__price">
                                Price: <span className="coffeeItemPage__fz30">{`${price}$`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CoffeeItemPage;