import React, {Component} from "react";
import styles from './Footer.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faEnvelopeOpen, faPhone, faTaxi, faVenusDouble} from "@fortawesome/free-solid-svg-icons";






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
                <i className="fa-4x fa-camera-retro"> </i>
                <div><FontAwesomeIcon  icon={faPhone}> </FontAwesomeIcon> Call us
                </div>
                <p>
                </p>
                <div><FontAwesomeIcon  icon={faEnvelopeOpen}> </FontAwesomeIcon>  Or write here
                </div>
            </div>
        )
    }
}

export default Footer;