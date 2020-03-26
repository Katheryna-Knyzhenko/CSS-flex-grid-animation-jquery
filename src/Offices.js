import React, {Component} from "react";
import styles from './Offices.module.css'
import {NavLink} from "react-router-dom";

class Offices extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (

            <section className={styles.offices}>
                <p>Объявления</p>
                <article>
                </article>
                <article>
                </article>
            <article>
            </article>
                <article>
                <p>
                    <NavLink to = '/'>На главную</NavLink>
                </p>
                </article>
            </section>
        )
    }
}

export default Offices;