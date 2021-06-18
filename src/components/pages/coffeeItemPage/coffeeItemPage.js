import React from 'react';

import './coffeeItemPage.scss';

const CoffeeItemPage = () => {
    return (
        <>
            <section className="coffee">
                <div className="container">
                    <h2 className="coffee__title">Our Coffee</h2>
                </div>
            </section>
            <section className="coffeeItemPage">
                <div className="container">
                    <div className="coffeeItemPage__wrapper">
                        <img className="coffeeItemPage__img" src="icons/coffeeItem.jpg"alt="coffeeItem"/>
                        <div className="coffeeItemPage__text">
                            <h2 className="coffeeItemPage__title">About it</h2>
                            <div className="divider">
                                <div className="line line_black"></div>
                                <img src="icons/beans/black_beans.png" alt="beans"/>
                                <div className="line line_black"></div>
                            </div>
                            <div className="coffeeItemPage__country">
                                <span className="coffeeItemPage__bold">Country</span>: Brasil
                            </div>
                            <div className="coffeeItemPage__descr">
                            <span className="coffeeItemPage__bold">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="coffeeItemPage__price">
                                Price: <span className="coffeeItemPage__fz30">16.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoffeeItemPage;