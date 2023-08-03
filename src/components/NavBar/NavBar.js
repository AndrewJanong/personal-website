import React, {useState} from "react";
import styles from './NavBar.module.css';
import { Link } from "react-scroll";
import sidebar from './sidebar.png';



const NavBar = (props) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const openNav = (e) => {
        e.preventDefault();
        setIsOpenSidebar(true);
    }
    
    const closeNav = (e) => {
        e.preventDefault();
        setIsOpenSidebar(false);
    }


    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link to='home' smooth={true} duration={1500}>
                    <p id={styles.fullName}>Andrew <span style={{color: '#576CBC'}}>Janong</span></p>
                </Link> 
            </div>
            <ul className={`${styles["nav-links"]}`}>
                <li>
                    <Link to='about' smooth={true} duration={1500}>
                        About
                    </Link>    
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={1500}>
                        Skills
                    </Link>    
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={1500}>
                        Projects
                    </Link>    
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={1500}>
                        Contact
                    </Link>    
                </li>
            </ul>
            <div className={styles.sidebar}>
                <div className={isOpenSidebar ? styles.sidebarIconHide : styles.sidebarIcon}>
                    <img src={sidebar} alt="" onClick={openNav}/>
                </div>
                <ul className={styles.sidebarLinks} show={isOpenSidebar ? 'show' : 'hide'}>
                    <li onClick={closeNav}>
                        <img src={sidebar} alt="" />
                    </li>
                    <li>
                        <Link onClick={closeNav} to='about' smooth={true} duration={1500} className={styles.link}>
                            About
                        </Link>    
                    </li>
                    <li>
                        <Link onClick={closeNav} to='skills' smooth={true} duration={1500} className={styles.link}>
                            Skills
                        </Link>    
                    </li>
                    <li>
                        <Link onClick={closeNav} to='projects' smooth={true} duration={1500} className={styles.link}>
                            Projects
                        </Link>    
                    </li>
                    <li>
                        <Link onClick={closeNav} to='contact' smooth={true} duration={1500} className={styles.link}>
                            Contact
                        </Link>    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;