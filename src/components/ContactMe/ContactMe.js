import React from "react";
import styles from "./ContactMe.module.css";
import { Fade } from "react-reveal";

const ContactMe = () => {
    return (
        <div className={styles.contact} id="contact">
            <Fade>
                <h1>Let's Get In Touch!</h1>
                <p>
                    I'm currently looking for an Internship anytime from January to August 2025.
                    If you believe that I would enhance your team or if you'd like to have a conversation, please don't hesitate to reach out to me!
                </p>
                <a href="mailto: andrewjanong@gmail.com">
                    <button className={`${styles["contact-button"]}`}>
                        Contact Me
                    </button>
                </a>
            </Fade>
        </div>
    )
}

export default ContactMe;