import React, {Component} from "react";
import styles from './Main.module.css';


class Main extends Component {
constructor () {
    super()
    this.state = {

    }
}
render() {

    return (
<section>
    <article>Article 1</article>
    <article>Article 2</article>
    <article>Article 3
        <div><span>Див 1</span></div>
        <div><span>Див 2</span></div>
        <div className={styles.divWithButton}>Див 3
            <p>
                <button>Открыть скрытый див</button>
            </p>
        </div>


    </article>
</section>
    )
}


}

export default Main;