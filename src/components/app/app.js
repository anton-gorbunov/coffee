import React from 'react';
import {Route, Switch} from 'react-router';
import {MainPage, CoffeePage, PleasurePage, CoffeeItemPage} from '../pages';
import Menu from '../menu/menu';
import Footer from '../footer/footer';

const App = () => {
    return (
       <>
            <Menu classList="header-menu"/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/coffee"  component={CoffeePage}/>
                <Route path="/pleasure"   component={PleasurePage}/>
                <Route path="/coffeeItemPage" component={CoffeeItemPage}/>
            </Switch>
            <Footer/>
       </>
    );
};

export default App;