import React, {Component} from "react";
import styles from './Header.module.css';
import simpleParallax from "simple-parallax-js";
import Parallax from "parallax-js";


class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        // var image = document.getElementsByClassName('header');
        // new simpleParallax(image, {
        //     orientation: 'right',
        // scale: 1.5});
        return (

            <div className={styles.header}  data-parallax = "scroll">
                <p className={styles.aboutSite}>Аренда квартир/домов/офисов
                </p>
            </div>
        )
    }
}

export default Header;