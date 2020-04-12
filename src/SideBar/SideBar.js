import React, {Component} from "react";
import styles from './SideBar.module.css'
import {NavLink} from "react-router-dom";

class SideBar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        localStorage.setItem('test', 'localStorage1');
        alert( localStorage.getItem('test') );
        localStorage.setItem('test1', 'localStorage2');
        console.log(localStorage.getItem('test1'));
        // var elementItem = document.getElementById('item');
        // localStorage.setItem(document.getElementById('item'), 'event.target.value');
        // var localValue = localStorage.getItem(document.getElementById('item'));
        // console.log(localValue);
        // localStorage.removeItem(document.getElementById('item'));
        // document.querySelector("item").addEventListener('keyup',function(){
        //
        //
        //     localStorage.setItem('text',document.querySelector("item").value);
        // });
        // document.querySelector('item').value = localStorage.getItem('text') ;
        // window.addEventListener('storage', function(e) {
        //     document.querySelector('body').innerHTML = localStorage.getItem(e.key);
        // });
        return (
          <div>
            <div className={styles.sidebar}>
                <p> <span className={styles.aboutSite}>Я первый сайдбар</span>
                </p>
                <p>
                <NavLink className={styles.link} to = "/intrOffers">Интересные предложения (Вам сюда!)</NavLink>
                </p>
                <form id="form">
                <textarea id="item"  className={styles.textArea} type="text" placeholder="Что Вы ищите?"></textarea>
                    <p>
                <button id="add" type="submit" className={styles.but}>Add</button>
                    </p>
                    <button onClick="localStorage.removeItem('item'); item.value=''" className={styles.but} id="clear">Clear All</button>
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