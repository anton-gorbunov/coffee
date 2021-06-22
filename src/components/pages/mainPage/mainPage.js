import React from 'react';
import CoffeeList from '../../coffeeList/coffeeList';
import useLoadingData from '../../hooks/useLoadingData';
import Spinner from '../../spinner/spinner';
import Divider from '../../divider/divider';
import Error from '../../error/error';

import './mainPage.scss';

const MainPage = () => {
    const {items, loading, error} = useLoadingData('http://myjson.dit.upm.es/api/bins/1pza');
    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <Error/>
    }
    const filteredItems = items.coffee.filter(item => item.category === 'best');
    return (
        <>
            <section className="about">
                <div className="container">
                    <h2 className="about__title">About Us</h2>
                    <Divider classList="line line_black"/>
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
                    <CoffeeList coffeeItems={filteredItems}/>
                </div>
            </section>
        </>
    );
};

export default MainPage;