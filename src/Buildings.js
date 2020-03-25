import React, {Component} from "react";
import styles from './Buildings.module.css'
import {NavLink} from "react-router-dom";

class Buildings extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (

            <div className={styles.buildingsVariants}>Buildings to choose
                <p>
                    <NavLink to = '/'>На главную</NavLink>
                </p>
            </div>
        )
    }
}

export default Buildings;