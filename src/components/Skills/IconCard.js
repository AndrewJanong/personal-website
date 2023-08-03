import React, {useState} from "react";
import styles from './IconCard.module.css';
import IconCplusplus from "../Icons/IconCplusplus";
import IconCSS from "../Icons/IconCSS";
import IconExpressjs from "../Icons/IconExpressjs";
import IconGit from "../Icons/IconGit";
import IconGithub from "../Icons/IconGithub";
import IconGo from "../Icons/IconGo";
import IconHTML from "../Icons/IconHTML";
import IconJava from "../Icons/IconJava";
import IconJavascript from "../Icons/IconJavascript";
import IconMongodb from "../Icons/IconMongodb";
import IconNodejs from "../Icons/IconNodejs";
import IconPython from "../Icons/IconPython";
import IconReact from "../Icons/IconReact";
import IconSQL from "../Icons/IconSQL";

const IconCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    let icon;

    switch (props.skill) {
        case 'C++':
            icon = <IconCplusplus />;
            break;
        case 'CSS':
            icon = <IconCSS />
            break;
        case 'ExpressJS':
            icon = <IconExpressjs />
            break;
        case 'Git':
            icon = <IconGit />
            break;
        case 'Github':
            icon = <IconGithub />
            break;
        case 'Golang':
            icon = <IconGo />
            break;
        case 'HTML':
            icon = <IconHTML />
            break;
        case 'Java':
            icon = <IconJava />
            break;
        case 'JavaScript':
            icon = <IconJavascript />
            break;
        case 'MongoDB':
            icon = <IconMongodb />
            break;
        case 'NodeJS':
            icon = <IconNodejs />
            break;
        case 'Python':
            icon = <IconPython />
            break;
        case 'ReactJS':
            icon = <IconReact />
            break;
        case 'SQL':
            icon = <IconSQL />
            break;
        default:
            icon = <IconSQL />
    }

    return (
        <div 
            className={styles["icon-card"]}  
        >
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >{icon}
            </div>
            <p 
                className={`${styles["name"]} ${isHovered ? styles["name-visible"] : ''}`}
            >
                {props.skill}
            </p>
        </div>
    )
}

export default IconCard;