import React from "react";
import styles from './Projects.module.css'
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className={styles.projects} id="projects">
            <h1>My Projects</h1>
            <div className={styles.container}>
                <ProjectCard 
                    title={'Library'} 
                    img={'./ProjectImages/Library.png'}
                    description={'A simple library website to keep track of what you are reading'} 
                    tools={'HTML, CSS, JavaScript'}
                    demo={'https://andrewjanong.github.io/library/'}
                    code={'https://github.com/AndrewJanong/library'}
                />

                <ProjectCard 
                    title={'Hangman'} 
                    img={'./ProjectImages/Hangman.png'}
                    description={'A hangman game where you have to guess the programming language. 6 strikes and you\'re out!'} 
                    tools={'React, HTML, CSS, JavaScript'}
                    demo={'https://andrewjanong.github.io/hangman/'}
                    code={'https://github.com/AndrewJanong/hangman'}
                />
            </div>
        </div>
    )
}

export default Projects;