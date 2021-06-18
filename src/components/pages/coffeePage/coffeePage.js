import React from 'react';
import CoffeeList from '../../coffeeList/coffeeList';

import './coffeePage.scss';

const CoffeePage = () => {
    return (
        <>
            <section className="coffee">
                <div className="container">
                    <h2 className="coffee__title">Our Coffee</h2>
                </div>
            </section>
            <section className="aboutOur">
                <div className="container">
                    <div className="aboutOur__wrapper">
                        <img src="icons/aboutBeansImg.png" alt="aboutBeansImg" className="aboutOur__img"/>
                        <div className="aboutOur__descr">
                            <h2 className="aboutOur__title">About our beans</h2>
                            <div className="divider">
                                <div className="line line_black"></div>
                                <img src="icons/beans/black_beans.png" alt="beans"/>
                                <div className="line line_black"></div>
                            </div>
                            <div className="aboutOur__text">
                                <p className="aboutOur__paragraph">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                                <p className="aboutOur__paragraph">
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. 
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="line line_black line_240"></div>
                </div>
            </section>
            <section className="goods">
                <div className="container">
                    <div className="goods__sort">
                        <div className="goods__locate">
                            <div className="goods__locate-title">Looking for</div>
                            <input 
                                type="text"
                                placeholder="start typing here..."
                                className="goods__locate-input"
                            />
                        </div>
                        <div className="goods__filter">
                            <div className="goods__filter-title">Or filter</div>
                            <ul className="goods__filter-menu">
                                <li className="goods__filter-item">Brazil</li>
                                <li className="goods__filter-item">Kenya</li>
                                <li className="goods__filter-item">Columbia</li>
                            </ul>
                        </div>
                    </div>
                    <CoffeeList/>
                </div>
            </section>
        </>
    );
};

export default CoffeePage;