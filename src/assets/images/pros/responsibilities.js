import React from "react";
import styles from "./responsibilities.module.css";
import image1 from "./images/responsibility1.svg"
import image2 from "./images/responsibility2.svg"
import image3 from "./images/responsibility3.svg"
import image4 from "./images/responsibility4.svg"

function Responsibilities() {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1>RESPONSIBILITIES</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <div className={styles.heading}>
                                <img src={image1} alt="resp1" />
                                <h2>ADVERTISE</h2>
                            </div>
                            <p>Publicize Antaragni and its sponsors in your college by sharing posts and promoting content by becoming a focal point for your respective college</p>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.heading}>
                                <img src={image3} alt="resp2" />
                                <h2>ORGANISE</h2>
                            </div>
                            <p>Organize events, workshops and sessions regarding Antaragni and what it has to offer with assistance from mentors</p>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.heading}>
                                <img src={image2} alt="resp3" />
                                <h2>CONDUCT</h2>
                            </div>
                            <p>Help in management of elimination rounds in your college and city to select participants for the main event</p>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.heading}>
                                <img src={image4} alt="resp4" />
                                <h2>COORDINATE</h2>
                            </div>
                            <p>Collaborate with the Antaragni team in organising on-ground events in your city</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img className={styles.inc} src={require("./images/resp.png")} alt="resp" />
                </div>
            </div>
        </div>
    );
}

export default Responsibilities;