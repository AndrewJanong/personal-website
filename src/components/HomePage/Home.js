import React from "react";
import styles from './Home.module.css';
import TypedStyle from "../../assets/TypedStyle";
import Socials from "./Socials";

const Home = (props) => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1><TypedStyle /></h1>
                <p>Full-time student with a passion in </p>
                <p>Computer Science, Math, and Quantitative Finance</p>
                <Socials />
            </div>
        </div>
    )
}

export default Home;