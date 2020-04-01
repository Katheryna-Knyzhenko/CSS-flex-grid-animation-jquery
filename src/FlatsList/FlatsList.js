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
                <div>Список квартир</div>
            </div>
        )
    }
}
export default FlatsList;