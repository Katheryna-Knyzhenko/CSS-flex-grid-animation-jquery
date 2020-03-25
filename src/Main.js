import React, {Component} from "react";
import styles from './Main.module.css';
import {NavLink, Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import Apartments from "./Apartments";





class Main extends Component {
constructor () {
    super()
    this.state = {

    }
}
render() {

    return (

<section>
    <article>Article 1</article>
    <article>Article 2</article>
    <article>Article 3
        <div className={styles.firstDivArticle3}><span>Аренда офисных помещений</span></div>
        <div className={styles.secondDivArticle3}>
            <NavLink to = '/buildings'><button>Аренда домов</button></NavLink>
        </div>
        <div className={styles.divWithButton}>

                <NavLink to = '/variantsOfApartments'><button>Аренда квартир</button></NavLink>


        </div>


    </article>
</section>
    )
}


}


export default Main;