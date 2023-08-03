import React from "react";
import styles from './Home.module.css';
import Socials from "./Socials";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Fade } from "react-reveal";

const Home = (props) => {

    const init = async (engine) => {
        await loadFull(engine);
    }

    return (
        <div className={styles.home} id="home">
            <Fade>
                <div className={styles.container}>
                    <h1>Hey, I'm Andrew</h1>
                    <p>Full-time student with a passion in </p>
                    <p>Computer Science and Math</p>
                    <Socials />
                </div>
            </Fade>
            <Particles options={{
                particles: {
                    color: {
                        value: "#fff"
                    },
                    number: {
                        value: 100
                    },
                    opacity: {
                        value: {min: 0.3, max: 0.8}
                    },
                    size: {
                        value: {min: 1, max: 5}
                    },
                    move: {
                        direction: "bottom-right",
                        enable: true,
                        speed: {min: 3, max: 5},
                        straight: true
                    }
                }
            }} init={init}/>
        </div>
    )
}

export default Home;