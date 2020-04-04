import React, {Component} from "react";
import styles from "./FlatsList.module.css";

class FlatsList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className={styles.wrapper}>
                <div className={styles.list}>Список квартир</div>
                <div className={styles.variants + styles.variant1}>Квартира 1</div>
                <div className={styles.variants.variant2}>Квартира 2</div>
                <div className={styles.variants.variant3}>Квартира 3</div>
                <div className={styles.variants.variant4}>Квартира 4</div>
                <div className={styles.variants.variant5}>Квартира 5</div>
                <div className={styles.variants.variant6}>Квартира 6</div>
                    <div className={styles.variants.variant7}>Квартира 7</div>
                    <div className={styles.variants.variant8}>Квартира 8</div>
            </div>
        )
    }
}
export default FlatsList;