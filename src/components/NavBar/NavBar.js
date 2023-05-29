import React from "react";
import styles from './NavBar.module.css';
import { Link } from "react-scroll";

const NavBar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title} onClick={() => alert('asda')}>
                <p id={styles.fullName}>Andrew <span style={{color: '#576CBC'}}>Janong</span></p>
            </div>
            <ul className={`${styles["nav-links"]}`}>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>    
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>    
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>    
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>    
                </li>
            </ul>
        </div>
    )
}

export default NavBar;