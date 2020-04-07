import React, {Component} from "react";
import styles from './Buildings.module.css'


class Buildings extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {


        return (

            <div className={styles.buildingsVariants} id = "scene">
                <div className={styles.building1} data-depth = "0.2" >1</div>
                <div className={styles.building2} data-depth = "0.6">2</div>
                <div className={styles.building3}>
                <div className={styles.home1}>Домик 1</div>
                    <div className={styles.home2}>Домик 2</div>
                    <div className={styles.home3}>Домик 3</div>
                    <div className={styles.home4}>Домик 4</div>
                    <div className={styles.home5}>Домик 5</div>
                    <div className={styles.home6}>Домик 6</div>
                    <div className={styles.home7}>Домик 7</div>
                    <div className={styles.home8}>Домик 8</div>
                    <div className={styles.home9}>Домик 9</div>
                    <div className={styles.home10}>Домик 10</div>
                    <div className={styles.home11}>Домик 11</div>
                    <div className={styles.home12}>Домик 12</div>
                </div>
            </div>
        )
    }
}

export default Buildings;