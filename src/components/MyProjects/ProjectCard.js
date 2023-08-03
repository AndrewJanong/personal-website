import React from "react";
import styles from './ProjectCard.module.css'
import { Fade } from "react-reveal";
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = (props) => {
    return (
        <div className={`${styles["project-card"]}`}>
            <Fade left>
                <div className={styles.info}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.subtitle}>{props.subtitle}</p>
                    <p className={styles.description}>{props.description}</p>
                    <div className={styles.tools}>
                        {props.tools.map((tool) => <p className={styles.tool}>{tool}</p>)}
                    </div>
                    <div className={styles.view}>
                        <a href={props.code}>
                            <FiGithub className={`${styles["link-icon"]}`}/>
                        </a>
                        <a href={props.demo}>
                            <FiExternalLink className={`${styles["link-icon"]}`}/>
                        </a>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className={styles.image}>
                    <img src={require(`${props.img}`)} alt="" />
                </div>
            </Fade>
            
        </div>
    )
}

export default ProjectCard;