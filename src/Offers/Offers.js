import React, {Component} from "react";
import styles from './Offers.module.css';
import $ from "jquery";
import {NavLink} from "react-router-dom";





class Offers extends Component {
    constructor() {
        super();
        this.state = {}
    }
    // componentDidMount() {
    //     $(window).stellar()
    // }
    //
    // componentWillUnmount() {
    //     $(window).stellar("destroy");
    // }
    render() {
        // $(document).ready(function ($) {
        //     $(window).stellar();
        //
        // })

        return (
            <section>
            <div className={styles.wrapper}>
            <div className = {styles.parallax}>
                 <h1>Welcome!</h1>
            </div>
                <div className={styles.wrapText}>
                <div className = {styles.par_textContent}>
                    <div className={styles.p}>
                        <div className={styles.text1} data-stellar-background-ratio="0.5">
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        </div>
                        <div className={styles.text2} data-stellar-background-ratio="0.9"> Квартиры
                        <br/><br/>
                        <NavLink to='/cssAnimation'>Перейти на css анимацию</NavLink></div>
                        <div className={styles.text3} data-stellar-background-ratio="0.3"> </div>
                    </div>

            </div>
                </div>
            </div>
            </section>
        );

    }

}
export default Offers;
