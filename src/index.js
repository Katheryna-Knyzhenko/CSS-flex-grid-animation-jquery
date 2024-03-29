import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Apartments from "./Appartments/Apartments";
import Buildings from "./Buildings/Buildings";
import Offices from "./Offices/Offices";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import FlatsList from "./FlatsList/FlatsList";
import Main from "./Main/Main";
import Offers from "./Offers/Offers";
import Animation from "./Animation/Animation";
import styles from './index.module.css';






// var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
    <BrowserRouter>
        <div className = {styles.wrap}>
        <Header/>
        <SideBar/>
        <Route exact path ='/' component={Main}/>
        <Route path ='/buildings' component={Buildings}/>
        <Route path ='/appartments' component={Apartments}/>
            <Route path ='/offices' component={Offices}/>
            <Route path= '/flatsList' component={FlatsList}/>
        <Route path= '/intrOffers' component={Offers}/>
        <Route path= '/cssAnimation' component={Animation}/>
        <Footer/>
        </div>
    </BrowserRouter>, document.getElementById("root"));
