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
                <p> <span className={styles.aboutSite}>Информация о сайте</span>
                </p>
                <form>
                <textarea className={styles.textArea} type="text" placeholder="Что вы ищите?"></textarea>
                    <p>
                <button>Отправить</button>
                    </p>
                </form>
            </div>
            <div className={styles.sidebar2}>
                <p> <span className={styles.aboutSite}>Информация о сайте</span>
                </p>
            </div>
</div>


        )
    }
}

export default SideBar;