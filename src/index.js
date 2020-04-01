import * as React from 'react';
import Main from './Appartments/Main/Main';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Apartments from "./Appartments/Apartments";
import styles from './Appartments/Main/Main.module.css';
import Buildings from "./Buildings/Buildings";
import Offices from "./Offices/Offices";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import FlatsList from "./FlatsList/FlatsList";





// var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <SideBar/>
        <Route exact path ='/' component={Main}/>
        <Route path ='/buildings' component={Buildings}/>
        <Route path ='/appartments' component={Apartments}/>
            <Route path ='/offices' component={Offices}/>
            <Route path= '/flatsList' component={FlatsList}/>
        <Footer/>
    </BrowserRouter>, document.getElementById("root"));
