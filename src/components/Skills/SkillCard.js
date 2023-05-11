import React from "react";
import styles from './SkillCard.module.css';

const SkillCard = (props) => {
    
    return (
        <div className={styles.card}>
            <img src={require(`./Icons/${props.img}.png`)} alt="" />
            <div className={styles.text}>
                <h1>{props.field}</h1>
                <ul>
                    {props.skills.map((skill) => {
                        const img = './Icons/' + skill + '.png';
                        return (
                            <li>{skill}  <span><img src={require(`${img}`)} alt="No Image Found" className={styles.icon}/></span> </li>       
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SkillCard;