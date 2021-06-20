import React from 'react';
import {withRouter} from 'react-router-dom';
import Menu from '../menu/menu';
import Divider from '../divider/divider';

const AppHeader = ({location}) => {
    const path = location.pathname;
    switch(path) {
        case '/':
           return (
            <>
            <Menu classList="header-menu"/>
            <section className="promo">
                <div className="container">
                    <h1 className="promo__title">Everything You Love About Coffee</h1>
                    <Divider classList="line line_white"/>
                    <h2 className="promo__subtitle">
                        We makes every day full of energy and taste <br/>
                        Want to try our beans?
                    </h2>
                    <a href="#" className="promo__link">More</a>
                </div>
            </section>
            </>
           );
        case '/pleasure' :
            return (
                <Header classList="pleasure" title="For your pleasure"/>
            );
        default: 
            return (
                <Header classList="coffee" title="Our Coffee"/>
            );
   }
};

const Header = ({classList, title}) => {
    return (
        <>
            <Menu classList="header-menu"/>
            <section className={classList}>
                    <div className="container">
                        <h2 className={`${classList}__title`}>{title}</h2>
                    </div>
            </section>
        </>
    );
};

export default withRouter(AppHeader);