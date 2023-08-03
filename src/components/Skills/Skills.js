import React from "react";
import styles from "./Skills.module.css";
import IconCard from "./IconCard";
import { Fade } from "react-reveal";

const Skills = () => {
    const languages = ['Java', 'C++', 'Python', 'Golang', 'JavaScript', 'HTML', 'CSS', 'SQL'];
    const frameworks = ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Git', 'Github']
    return (
        <div className={styles.skills} id="skills">
            <Fade left>
                <div className={styles.header}>
                    <h1>My Skills</h1>
                </div>
                <div className={styles.container}>
                    <p>Here are some of the things I've learnt so far:</p>
                    <div className={styles.languages}>
                        <p>Languages</p>
                        <div className={`${styles["icons-container"]}`}>
                            {
                                languages.map((language) => {
                                    return <IconCard skill={language} />
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.frameworks}>
                        <p>Frameworks & Tools</p>
                        <div className={`${styles["icons-container"]}`}>
                            {
                                frameworks.map((framework) => {
                                    return <IconCard skill={framework} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Skills;