import React from "react";
import styles from "./About.module.css";
import ProfilePicture from "./ProfilePicture.JPG";

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.text}>
                <h1>About Me</h1>
                <p>I am an Undergraduate studying Computer Science at the National University of Singapore (NUS).
                    I love to solve challenging problems in Math and CS.
                    Besides studying I love to play Basketball, the Piano, and Chess.
                </p>
            </div>
            <div className={styles.images}>
                <img src={ProfilePicture} alt="Image Not Found" />
            </div>
        </div>
    )
}

export default About;