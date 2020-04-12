import React, {Component} from "react";
import styles from './Main.module.css';
import {NavLink} from "react-router-dom";





class Main extends Component {
constructor () {
    super();
    this.state = {

    }
}
render() {
    localStorage.setItem('myKey', 'myValue');
    let localValue = localStorage.getItem('myKey');
    console.log(localValue);

    return (

<section>
    <article className={styles.firstArticle}>
        <div className={styles.picOne}></div>
    <div className={styles.picTwo}></div>
    <div className={styles.picThree}></div>
    </article>
    <article className={styles.secondArticle}>
        <div></div>
        <div></div>
        <div></div>
    </article>
    <article className={styles.article3}>
        <div className={styles.firstDivArticle3}>
            <NavLink to = '/offices'><button className={styles.buttonB}>Аренда офисных <br></br>помещений</button></NavLink>
        </div>
        <div className={styles.secondDivArticle3}>
            <NavLink to = '/buildings'><button className={styles.buttonB}>Аренда домов</button></NavLink>
        </div>
        <div className={styles.divWithButton}>
                <NavLink to = '/appartments'><button className={styles.buttonB}>Аренда квартир</button></NavLink>


        </div>


    </article>
</section>
    )
}


}


export default Main;