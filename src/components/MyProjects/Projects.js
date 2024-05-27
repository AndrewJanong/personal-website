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

                <ProjectCard 
                    title={'PINUS Study'}
                    img={'./ProjectImages/PINUS-Study.png'}
                    subtitle={'Module Discussion Forum'}
                    description={
                        `PINUS Study is a website built for Indonesian students at NUS to discuss and give feedback to NUS modules. `
                    }
                    tools={['ReactJS', 'Typescript', 'Golang', 'SQL']}
                    demo={'https://www.pinusstudy.com/'}
                    code={'https://github.com/orgs/PINUSTECH-2022/repositories'}
                />

                <ProjectCard 
                    title={'KeepInTouch'}
                    img={'./ProjectImages/KeepInTouch.png'}
                    subtitle={'Manage your Job Search'}
                    description={
                        `KeepInTouch is a Desktop application developed for jobseekers. 
                        It is meant to help them track connections in their professional network, along with events related to their professional development. 
                        While it has a GUI, most of the user interactions happen using a CLI (Command Line Interface). `
                    }
                    tools={['Java, JavaFX']}
                    demo={'https://ay2324s1-cs2103t-w16-1.github.io/tp/'}
                    code={'https://github.com/AY2324S1-CS2103T-W16-1/tp '}
                />
            </div>
        </div>
    )
}

export default Projects;