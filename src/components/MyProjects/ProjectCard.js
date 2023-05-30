import React from "react";
import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.info}>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.image2}>
                    <img src={require(`${props.img}`)} alt="" />
                </div>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.tools}>{props.tools}</p>
                <div className={styles.view}>
                    <a href={props.demo}><button>Demo</button></a>
                    <a href={props.code}><button>Code</button></a>
                </div>
            </div>

            <div className={styles.image}>
                <img src={require(`${props.img}`)} alt="" />
            </div>
            
        </div>
    )
}

export default ProjectCard;