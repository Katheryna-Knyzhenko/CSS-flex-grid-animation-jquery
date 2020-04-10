import React, {Component} from "react";
import styles from "./Animation.module.css"

class Animation extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className={styles.wrapperAnimation}> Анимация
                <div></div>
            </div>
        )
    }
}
export default Animation;