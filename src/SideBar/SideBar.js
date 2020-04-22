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
 $('#aboutSite, #aboutSite2').slideUp(3000).slideDown(3000);
 $('#secondBar').fadeTo(4000, 0.8).fadeTo(2000, 1);
 $('textarea').attr('title', 'Укажите предмет поиска, так будет проще найти нужное').animate({ 'font-size': '16px'}, 5000);
           // $ ('li').mouseout(function(){
           //     var clone = $(this).clone();
           //     $(this).after(clone);
           // });
            $('button').each(function () {
                if($(this).attr('type')=== 'submit') {
                    $(this).attr('title', 'Искать по сайту')
                }
            });
$('#wrapper div:first-child').append('<div>Добавили текст в $</div>');
            $('#aboutSite2').click(function() {
                var clone = $(this).clone();
                $(this).after(clone);
            });
            $('#ads').click(function () {
// eslint-disable-next-line no-unused-vars
let popupid = $('#' + $(this).attr('rel'));
 $(popupid).show();

            });
            $('#adsid').click(function () {
                $('#adsid').hide();
            });
            let popupid = $('#' + $('#ads').attr('rel'));

            setTimeout(function () {
                $(popupid).show();
            }, 4000);
            $('form').on('submit', function (event) {
                event.preventDefault();
                var text = $('textarea').val();
                var liArr = $('li').text(text);
                $.makeArray(liArr);
                $.map(liArr, function (text) {
                    var text = $('textarea').val();


                });
             $('#item').click(function () {
                 $('#item').val('');
             })
                // $('li').text(text);

                    // var clone = $('li').clone();
                    //  $('li').after(clone);

                    // var liarr = $.makeArray();
                    // liarr.map(g) = () {
                    // $('li').text(text);
            });
            $('form').on('reset', function (event) {
                event.preventDefault();
                    $('li').text('List');
                    $('textarea').val('');

            })
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
          <div id = 'wrapper'>
            <div className={styles.sidebar}>
                <p> <span className={styles.aboutSite} id='aboutSite'>Я первый сайдбар</span></p>
                <p>
                <NavLink className={styles.link} to = "/intrOffers">Интересные предложения (Вам сюда!)</NavLink>
                </p>
                <form id="form">
                <textarea  id="item"  className={styles.textArea} type="text" placeholder="Что Вы ищите?"></textarea>
                    <p>
                <button id="add"  type="submit" className={styles.but}>Search</button>
                    </p>
                    <button  type = 'reset' className={styles.but} id="clear">Clear all</button>
                </form>
                <h2 id= "h">Items</h2>
                 <ul  id= "todos">
                     <li><span>&#9745;</span>List</li></ul>
            </div>
            <div id = 'secondBar' className={styles.sidebar2}>
                <p> <span className={styles.aboutSite} id = "aboutSite2">Я второй сайдбар</span>
                </p>
                <NavLink className={styles.link1} to = "/">На главную</NavLink>
                <p id="ads" rel='adsid'><span className={styles.advert}>Реклама, нажми сюда!</span></p>

            </div>
              <div className={styles.adsid} id = 'adsid' >Реклама</div>
</div>


        )
    }
}


export default SideBar;