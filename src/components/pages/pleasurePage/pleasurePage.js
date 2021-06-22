import React, {useState} from 'react';
import CoffeeList from '../../coffeeList/coffeeList';
import useLoadingData from '../../hooks/useLoadingData';
import Spinner from '../../spinner/spinner';
import Divider from '../../divider/divider';
import Error from '../../error/error';

import './pleasurePage.scss';

const PleasurePage = () => {
   const {loading, items, error} = useLoadingData('http://myjson.dit.upm.es/api/bins/1pza');
   const [showedItems, setShowedItems] = useState(6);
   const button = (
       <button className="aboutOur__button" onClick={onHandleClick}>show more</button>
   );
   function onHandleClick() {
       setShowedItems(showedItems + 3);
   }
    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <Error/>
    }
    const itemsOnPage = items.coffee.slice(0, showedItems);
    const visibleButton = itemsOnPage.length !== items.coffee.length ? button :null;
    return (
        <>
            <section className="aboutOur">
                <div className="container">
                    <div className="aboutOur__wrapper">
                        <img className="aboutOur__img" src="icons/aboutGoodsImg.png" alt="aboutGoodsImg"/>
                        <div className="aboutOur__descr">
                            <h2 className="aboutOur__title">About our goods</h2>
                            <Divider classList="line line_black"/>
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
            <CoffeeList coffeeItems={itemsOnPage}/>
            {visibleButton}
        </>
    );
};

export default PleasurePage;