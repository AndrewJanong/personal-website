import React from "react";
import styles from "./About.module.css";
import ProfilePicture from "./ProfilePicture.JPG";

const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className={styles.text}>
                <div className={styles.aboutText}>
                    <h1>About Me</h1>
                    <p>I am an Undergraduate studying Computer Science at the National University of Singapore (NUS).
                        I love to solve challenging problems in Math and CS.
                        Besides studying I love to play Basketball, the Piano, and Chess.
                    </p>
                </div>
                <div className={styles.contactText}>
                    <h1>Contact Details</h1>
                    <p>Prince George's Park Residence</p>
                    <p>Singapore City, Singapore 118425</p>
                    <p>(+65) 9390 2700</p>
                    <p>andrew.janong@u.nus.edu</p>
                </div>
            </div>
            <div className={styles.images}>
                <img src={ProfilePicture} alt="Image Not Found" />
            </div>
        </div>
    )
}

export default About;