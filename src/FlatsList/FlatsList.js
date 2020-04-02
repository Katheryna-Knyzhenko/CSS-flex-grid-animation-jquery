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
                                                <div class="foo">
	<h1>1</h1>
</div>
<div class="bar">
	<h2>2</h2>
</div>
                <div>Список квартир</div>
            </div>
        )
    }
}
export default FlatsList;