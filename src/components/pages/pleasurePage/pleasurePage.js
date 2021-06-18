import React from 'react';
import CoffeeList from '../../coffeeList/coffeeList';

import './pleasurePage.scss';

const PleasurePage = () => {
    return (
        <>
            <section className="pleasure">
                <div className="container">
                    <h2 className="pleasure__title">For your pleasure</h2>
                </div>
            </section>
            <section className="aboutOur">
                <div className="container">
                    <div className="aboutOur__wrapper">
                        <img className="aboutOur__img" src="icons/aboutGoodsImg.png" alt="aboutGoodsImg"/>
                        <div className="aboutOur__descr">
                            <h2 className="aboutOur__title">About our goods</h2>
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
            <CoffeeList/>
        </>
    );
};

export default PleasurePage;