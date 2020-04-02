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
                    <NavLink className={styles.nav} to = '/flatsList'>Перейти к списку квартир</NavLink>
                    </p>
                    <p>
                        <textarea className={styles.textarea} type="text" placeholder="Что вы ищите?"></textarea>
                    </p>
                    <button>Отправить</button>

                </div>

            </div>
</div>
        )
    }
}
export default Apartments;