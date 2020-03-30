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
                <article>
                <p>Объявления</p>
                </article>
                <article> Офис 1
                </article>
                <article> Офис 2
                </article>
            <article className={styles.article3}> Офис 3
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