import React, {Component} from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (

            <div className={styles.header}>
                <p> <span>Аренда квартир/домов/оффисов</span>
                    <NavLink to = '/'>На главную</NavLink>
                </p>
            </div>
        )
    }
}

export default Header;