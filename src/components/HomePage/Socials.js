import React, {useState} from "react";
import "boxicons";
import styles from './Socials.module.css';


const Socials = () => {
    const [hovering1, setHovering1] = useState(false);
    const [hovering2, setHovering2] = useState(false);
    const [hovering3, setHovering3] = useState(false);

    return (
        <div className={styles.socials}>
            <a href="https://www.instagram.com/andrew_janong/" onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)}>
                <box-icon name='instagram-alt' type='logo' color={hovering1 ? '#3282B8' : 'white'}></box-icon>
            </a>
            <a href="https://www.linkedin.com/in/andrew-daniel-janong" onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)}>
                <box-icon name='linkedin-square' type='logo' color={hovering2 ? '#3282B8' : 'white'}></box-icon>
            </a>
            <a href="https://github.com/AndrewJanong" onMouseEnter={() => setHovering3(true)} onMouseLeave={() => setHovering3(false)}>
                <box-icon name='github' type='logo' color={hovering3 ? '#3282B8' : 'white'}></box-icon>
            </a>
        </div>
    )
}

export default Socials;