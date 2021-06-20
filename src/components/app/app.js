import React from 'react';
import {Route, Switch} from 'react-router';
import {MainPage, CoffeePage, PleasurePage, CoffeeItemPage} from '../pages';
import Footer from '../footer/footer';
import AppHeader from '../appHeader/appHeader';

const App = () => {
    return (
       <>
            <AppHeader/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/coffee"  component={CoffeePage}/>
                <Route path="/pleasure"   component={PleasurePage}/>
                <Route path="/:id" exact component={CoffeeItemPage}/>
            </Switch>
            <Footer/>
       </>
    );
};

export default App;