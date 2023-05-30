import React from "react";
import styles from './Home.module.css';
import TypedStyle from "../../assets/TypedStyle";
import Socials from "./Socials";

const Home = (props) => {
    return (
        <div className={styles.home} id="home">
            <div className={styles.container}>
                <TypedStyle />
                <p>Full-time student with a passion in </p>
                <p>Computer Science and Math</p>
                <Socials />
            </div>
        </div>
    )
}

export default Home;