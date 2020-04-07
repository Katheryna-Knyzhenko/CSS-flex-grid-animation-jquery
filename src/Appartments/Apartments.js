import React, {Component} from "react";
import styles from './Apartments.module.css'
import {NavLink} from "react-router-dom";
import SimpleParallax from "simple-parallax-js";
import Parallax from "parallax-js";
import $ from "jquery";

class Apartments extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
//         $(window).scroll(function() {
// var st = $(this).scrollTop();
// $(".navlinkToMain").css({
//     "transform": "translate(0% + st/2 + "%")"
// });
//         });

        // var image = document.getElementsByClassName('flatsVariants');
        // new SimpleParallax(image, {
        //     orientation: 'right'});
        return (
<div className={styles.wrap} id = "scene">
            <div className={styles.flatsVariants} data-depth = "0.2">
                <div className={styles.navlinkToMain} data-depth = "0.6">
                    <p>
                    <NavLink className={styles.nav} to = '/flatsList'>Перейти к списку квартир</NavLink>
                    </p>
                    <p >
                        <textarea className={styles.textarea} type="text" placeholder="Что вы ищите?"></textarea>
                    </p>
                    <button>Отправить</button>

                </div>

            </div>
</div>
        );



        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
        parallaxInstance();
    }
}
export default Apartments;