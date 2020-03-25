import React, {Component} from "react";
import styles from './Apartments.module.css'

class Apartments extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (

            <div className={styles.flatsVariants}>Apartments to choose </div>
        )
    }
}

export default Apartments;