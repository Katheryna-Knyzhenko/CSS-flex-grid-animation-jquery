import React, {Component} from "react";
import styles from './SideBar.module.css'
import {NavLink} from "react-router-dom";

class SideBar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
<div>
            <div className={styles.sidebar}>
                <p> <span className={styles.aboutSite}>Я первый сайдбар</span>
                </p>
                <p>
                <NavLink className={styles.link} to = "/intrOffers">Интересные предложения (Вам сюда!)</NavLink>
                </p>
                <form>
                <textarea className={styles.textArea} type="text" placeholder="Что Вы ищите?"></textarea>
                    <p>
                <button className={styles.but}>Отправить</button>
                    </p>
                </form>
            </div>
            <div className={styles.sidebar2}>
                <p> <span className={styles.aboutSite}>Я второй сайдбар</span>
                </p>
                <NavLink className={styles.link} to = "/">На главную</NavLink>
            </div>
</div>


        )
    }
}

export default SideBar;