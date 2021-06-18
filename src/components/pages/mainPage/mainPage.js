import React from 'react';
import CoffeeList from '../../coffeeList/coffeeList';

import './mainPage.scss';

const MainPage = () => {
    return (
        <>
            <section className="promo">
                <div className="container">
                    <h1 className="promo__title">Everything You Love About Coffee</h1>
                    <div className="divider">
                        <div className="promo__line line"></div>
                        <img src="icons/beans/white_beans.png" alt="beans"/>
                        <div className="promo__line line"></div>
                    </div>
                    <h2 className="promo__subtitle">
                        We makes every day full of energy and taste <br/>
                        Want to try our beans?
                    </h2>
                    <a href="#" className="promo__link">More</a>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <h2 className="about__title">About Us</h2>
                    <div className="divider">
                        <div className="about__line line line_black"></div>
                        <img src="icons/beans/black_beans.png" alt="beans"/>
                        <div className="about__line line line_black"></div>
                    </div>
                    <div className="about__text">
                        <p className="about__pragraph">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>

                        <p className="about__pragraph">
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                    </div>
                </div>
            </section>
            <section className="best">
                <div className="container">
                    <h2 className="best__title">Our best</h2>
                    <CoffeeList/>
                </div>
            </section>
        </>
    );
};

export default MainPage;