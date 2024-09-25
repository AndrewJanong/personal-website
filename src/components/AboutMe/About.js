import React from "react";
import styles from "./About.module.css";
import ProfilePicture from "./ProfilePicture.JPG";
import { Fade } from "react-reveal";

const About = () => {
    return (
        <div className={styles.about} id="about">
            <Fade left>
                <div className={styles.header}>
                    <h1>About Me</h1>
                </div>
            </Fade>
            <div className={styles.container}>
                <Fade left>
                    <div className={`${styles["about-text"]}`}>
                        <p>
                            Hi there! I'm Andrew and I love solving challenging problems, especially related to Computer Science and Math!
                            Currently, I'm a second-year student at <span>NUS</span> pursuing a degree in <span>Computer Science</span> with a second major in <span>Mathematics</span>.
                        </p>
                        <p>
                            I love to explore and have developed interest in several areas. Here are some topics that I've been learning recently:
                        </p>
                        <div className={styles.skills}>
                            <div className={styles.skill}>Full Stack Development</div>
                            <div className={styles.skill}>Algorithm Analysis</div>
                            <div className={styles.skill}>Parallel Computing</div>
                            <div className={styles.skill}>Operating Systems</div>
                            <div className={styles.skill}>Game Theory</div>
                            <div className={styles.skill}>Stochastic Processes</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className={styles.image}>
                        <img src={ProfilePicture} alt="Not Found" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About;