import React, {Component} from "react";
import styles from './Offers.module.css';


class Offers extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <section>
            <div className={styles.wrapper}>
            <div className = {styles.parallax}>
                 <h1>Welcome!</h1>
            </div>
                <div className={styles.wrapText}>
                <div className = {styles.par_textContent}>
                    <div className={styles.p}>
                        <div className={styles.text1}> текст 1</div>
                        <div className={styles.text2}> текст 2</div>
                        <div className={styles.text3}> текст 3</div>
                        <div className={styles.text4}> текст 4</div>
                    </div>

            </div>
                </div>
            </div>
            </section>
        )
    }
}
export default Offers;
