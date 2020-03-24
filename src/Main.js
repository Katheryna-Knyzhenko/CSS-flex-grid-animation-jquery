import React, {Component} from "react";
import styles from './Main.module.css';
import {NavLink} from "react-router-dom/modules/NavLink";
import Redirect from "react-router/modules/Redirect";
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
        <div className={styles.firstDivArticle3}><span>Див 1</span></div>
        <div className={styles.secondDivArticle3}><span>Див 2</span></div>
        <div className={styles.divWithButton}>Див 3
            <p>
                <button>Варианты квартир<NavLink to = '/variantOfApartments'><Apartments/></NavLink></button>

            </p>
        </div>


    </article>
</section>
    )
}


}

export default Main;