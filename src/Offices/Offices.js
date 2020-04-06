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

                <article className={styles.article1}> Офис 1
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
                <article className={styles.article2}> Офис 2
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
            <article className={styles.article3}>
                <p> Горячие предложения
                </p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </article>

            </section>
        )
    }
}

export default Offices;