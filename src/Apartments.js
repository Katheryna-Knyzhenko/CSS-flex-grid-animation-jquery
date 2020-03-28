import React, {Component} from "react";
import styles from './Apartments.module.css'
import {NavLink} from "react-router-dom";

class Apartments extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
<div className={styles.wrap}>
            <div className={styles.flatsVariants}>Apartments to choose
                <p className={styles.navlinkToMain}>
                    <NavLink to = '/'>На главную</NavLink>
                </p>
            </div>
</div>
        )
    }
}

export default Apartments;