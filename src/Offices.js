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

            <div className={styles.offices}>Offices to choose
                <p>
                    <NavLink to = '/'>На главную</NavLink>
                </p>
            </div>
        )
    }
}

export default Offices;