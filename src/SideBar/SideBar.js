import React, {Component} from "react";
import styles from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import $ from "jquery";

class SideBar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        localStorage.setItem('test', 'localStorage1');
        console.log( localStorage.getItem('test') );
        localStorage.setItem('test1', 'localStorage2');
        console.log(localStorage.getItem('test1'));

        $(document).ready(function() {

 $('h2 + ul').hide(3000).show(3000);
 $('#aboutSite, #aboutSite2').fadeOut(3000).fadeIn(3000);

        });
        //
        // const obj = {
        //     count: 3,
        //     toString() {
        //         return `<ul><li>TEXT</li></ul>`;
        //     }
        // }
        // localStorage.clear();
        // localStorage.setItem('obj', obj);
        //
        // for (let i = 0; i < obj.count; i++) {
        //     let div1 = document.createElement('div');
        //     div1.className = 'cla_ss';
        //     div1.innerHTML = localStorage.getItem('obj');
        //     var target = document.getElementById( "form" );
        //     document.body.append(div1);
        //     $('#todos').eq(1).append(div1);
        //
        //
        // }
        return (
          <div>
            <div className={styles.sidebar}>
                <p> <span className={styles.aboutSite} id='aboutSite'>Я первый сайдбар</span></p>
                <p>
                <NavLink className={styles.link} to = "/intrOffers">Интересные предложения (Вам сюда!)</NavLink>
                </p>
                <form id="form">
                <textarea  id="item"  className={styles.textArea} type="text" placeholder="Что Вы ищите?"></textarea>
                    <p>
                <button id="add"  type="submit" className={styles.but}>Add</button>
                    </p>
                    <button  className={styles.but} id="clear">Clear All</button>
                </form>
                <h2 id= "h">Items</h2>
                 <ul  id= "todos">
                     <li><span>&#9745;</span>List</li></ul>
            </div>
            <div className={styles.sidebar2}>
                <p> <span className={styles.aboutSite} id = "aboutSite2">Я второй сайдбар</span>
                </p>
                <NavLink className={styles.link1} to = "/">На главную</NavLink>

            </div>
</div>


        )
    }
}


export default SideBar;