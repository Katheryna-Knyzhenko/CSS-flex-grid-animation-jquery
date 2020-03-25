import * as React from 'react';
import Main from './Main';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Apartments from "./Apartments";
import styles from './Main.module.css';
import Buildings from "./Buildings";
import Offices from "./Offices";





// var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
    <BrowserRouter>
        <div className={styles.wrapper}>
        <Route exact path ='/' component={Main}/>
        <Route path ='/buildings' component={Buildings}/>
        <Route path ='/appartments' component={Apartments}/>
            <Route path ='/offices' component={Offices}/>
    </div>
    </BrowserRouter>, document.getElementById("root"));
