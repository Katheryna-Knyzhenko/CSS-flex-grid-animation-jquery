import React, {Component} from "react";
import styles from './SideBar.module.css'
import {NavLink} from "react-router-dom";

class SideBar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        var elementItem = document.getElementById('item');
        localStorage.setItem(document.getElementById('item'), 'event.target.value');
        var localValue = localStorage.getItem(document.getElementById('item'));
        console.log(localValue);
        localStorage.removeItem(document.getElementById('item'));

        return (
          <div>
            <div className={styles.sidebar}>
                <p> <span className={styles.aboutSite}>Я первый сайдбар</span>
                </p>
                <p>
                <NavLink className={styles.link} to = "/intrOffers">Интересные предложения (Вам сюда!)</NavLink>
                </p>
                <form id="form" action="#" method="POST">
                <textarea id="item"  className={styles.textArea} type="text" placeholder="Что Вы ищите?"></textarea>
                    <p>
                <button id="add" type="submit" className={styles.but}>Add</button>
                    </p>
                    <button className={styles.but} id="clear">Clear All</button>
                </form>
                <h2>Items</h2>
                 <ul id="todos"></ul>
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