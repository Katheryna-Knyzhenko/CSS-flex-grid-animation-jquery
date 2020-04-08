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
                <div className = {styles.textContent}>
                    <p>
                        текст 1
                        <br/><br/>
                    текст 2
                        <br/><br/>
                        текст 3

                    </p>

            </div>
                </div>
            </div>
            </section>
        )
    }
}
export default Offers;
