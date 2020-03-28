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
                <div className={styles.navlinkToMain}>
                    <p>
                    <NavLink className={styles.nav} to = '/'>На главную</NavLink>
                    </p>
                    <p>
                        Не выходит этот элемент
                    </p>
                </div>
            </div>
</div>
        )
    }
}

export default Apartments;