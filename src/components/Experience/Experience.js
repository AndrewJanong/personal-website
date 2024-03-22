import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
    return (
        <div className={styles.experience} id="experience">
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
                            In the last few years, I have learnt multiple programming languages and made some personal projects.
                            I aspire to establish a profession as a Software Engineer, constructing meaningful products with a lasting impact.
                        </p>
                        <p>Here are some of the technologies I've been working with recently: </p>
                        <div className={styles.skills}>
                            <div className={styles.skill}>JavaScript (ES6+)</div>
                            <div className={styles.skill}>React.js</div>
                            <div className={styles.skill}>Node.js</div>
                            <div className={styles.skill}>Golang</div>
                            <div className={styles.skill}>MongoDB</div>
                            <div className={styles.skill}>SQL</div>
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