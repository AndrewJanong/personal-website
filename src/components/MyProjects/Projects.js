import React from "react";
import styles from './Projects.module.css'
import ProjectCard from "./ProjectCard";
import { Fade } from "react-reveal";

const Projects = () => {
    return (
        <div className={styles.projects} id="projects">
            <Fade left>
                <div className={styles.header}>
                    <h1>My Projects</h1>
                </div>
            </Fade>
            <div className={styles.container}>
                <ProjectCard 
                    title={'Sportify'} 
                    img={'./ProjectImages/Sportify.png'}
                    subtitle={'Sports Social Media Website'}
                    description={
                        `Sportify is a social media website focused on sports that simplifies the process of arranging a sports meetup and discuss topics related to sports.
                        Users can add others as a friend, create groups, and chat with each other through groups or meetups, making Sportify a nice platform to connect sports enthusiasts.`                        
                    } 
                    tools={['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB']}
                    demo={'https://sportify-frontend-two.vercel.app/'}
                    code={'https://github.com/AndrewJanong/Sportify'}
                />
            </div>
        </div>
    )
}

export default Projects;