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

            <div className={styles.buildingsVariants}>
                <div className={styles.building1}>1</div>
                <div className={styles.building2}>2</div>
                <div className={styles.building3}>3</div>
            </div>
        )
    }
}

export default Buildings;