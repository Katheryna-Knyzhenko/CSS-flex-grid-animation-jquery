import * as React from 'react';
import Main from './Main';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router} from "react-router-dom";
import Apartments from "./Apartments";





// var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
    <BrowserRouter>
        {/*<Router history={browserHistory}>*/}
        <Route path='/' component={Main}>
        <Route path='/variantsOfApartments' component={Apartments}/>
        </Route>
        {/*</Router>*/}

    </BrowserRouter>, document.getElementById("root"));
