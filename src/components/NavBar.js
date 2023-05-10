import React from "react";
import styles from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title} onClick={() => alert('asda')}>
                <p id={styles.fullName}>Andrew Janong</p>
            </div>
            <ul className={`${styles["nav-links"]}`}>
                <li><a href="">Home</a></li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar;