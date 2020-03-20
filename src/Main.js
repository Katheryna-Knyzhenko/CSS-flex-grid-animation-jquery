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
        <div>Див 1</div>
        <div>Див 1</div>
        <div>Див 3</div></article>
</section>
    )
}


}

export default Main;