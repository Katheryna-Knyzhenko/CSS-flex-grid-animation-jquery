import React, {Component} from "react";
import styles from './Main.module.css';
import {NavLink} from "react-router-dom";





class Main extends Component {
constructor () {
    super()
    this.state = {

    }
}
render() {

    return (

<section>
    <article className={styles.firstArticle}>Article 1
    <div></div>
    <div></div>
    <div></div>
    </article>
    <article className={styles.secondArticle}>Article 2
        <div></div>
        <div></div>
        <div></div>
    </article>
    <article>Article 3
        <div className={styles.firstDivArticle3}>
            <NavLink to = '/offices'><button>Аренда офисных помещений</button></NavLink>

        </div>
        <div className={styles.secondDivArticle3}>
            <NavLink to = '/buildings'><button>Аренда домов</button></NavLink>
        </div>
        <div className={styles.divWithButton}>

                <NavLink to = '/appartments'><button>Аренда квартир</button></NavLink>


        </div>


    </article>
</section>
    )
}


}


export default Main;