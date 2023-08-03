import React, {useState} from "react";
import styles from './Socials.module.css';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'


const Socials = () => {
    const [hovering1, setHovering1] = useState(false);
    const [hovering2, setHovering2] = useState(false);
    const [hovering3, setHovering3] = useState(false);
    const [hovering4, setHovering4] = useState(false);

    return (
        <div className={styles.socials}>
            <a href="https://www.instagram.com/andrew_janong/" onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)}>
                <AiFillInstagram className={`${styles["socials-icon"]} ${hovering1 ? styles["icon-hovered"] : ''}`}/>
            </a>
            <a href="https://www.linkedin.com/in/andrew-daniel-janong" onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)}>
                <AiFillLinkedin className={`${styles["socials-icon"]} ${hovering2 ? styles["icon-hovered"] : ''}`}/>
            </a>
            <a href="https://github.com/AndrewJanong" onMouseEnter={() => setHovering3(true)} onMouseLeave={() => setHovering3(false)}>
                <AiFillGithub className={`${styles["socials-icon"]} ${hovering3 ? styles["icon-hovered"] : ''}`}/>
            </a>
            <a href="mailto: andrew.janong@u.nus.edu" onMouseEnter={() => setHovering4(true)} onMouseLeave={() => setHovering4(false)}>
                <MdEmail className={`${styles["socials-icon"]} ${hovering4 ? styles["icon-hovered"] : ''}`}/>
            </a>
        </div>
    )
}

export default Socials;