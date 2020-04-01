import React, {Component} from "react";
import styles from './Footer.module.css'


class Footer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (

            <div className={styles.footer}>
                <p> <span>Контакты</span>
                </p>
            </div>
        )
    }
}

export default Footer;