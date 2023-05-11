import React from "react";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

const Skills = () => {
    const languages = ['Java', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'];
    const frameworks = ['React.js', 'jQuery', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap']
    return (
        <div className={styles.skills}>
            <h1>My Skills</h1>
            <div className={styles.container}>
                <SkillCard field={'Languages'} skills={languages} img={'code'}/>
                <SkillCard field={'Frameworks/Tools'} skills={frameworks} img={'tools'}/>
            </div>
        </div>
    )
}

export default Skills;