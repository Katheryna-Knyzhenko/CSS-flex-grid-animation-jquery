import React, {Component} from "react";
import styles from './Header.module.css'


class Header extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (

            <div className={styles.header}>
                <p> <span>Аренда квартир/домов/оффисов</span>
                </p>
            </div>
        )
    }
}

export default Header;