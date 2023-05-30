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
            <div className={styles.sidebar}>
                <div className={isOpenSidebar ? styles.sidebarIconHide : styles.sidebarIcon}>
                    <img src={sidebar} alt="" onClick={openNav}/>
                </div>
                <ul className={styles.sidebarLinks} 
                    style={{
                        width: isOpenSidebar ? '40%' : '0',
                        display: isOpenSidebar ? 'flex' : 'none',
                        transition: isOpenSidebar ? '0.5s' : '0s'
                }}>
                    <li onClick={closeNav}>
                        <img src={sidebar} alt="" />
                    </li>
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
        </div>
    )
}

export default NavBar;