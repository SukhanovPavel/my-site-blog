import React from "react";
import {Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return(
            <nav className={styles.nav}>
                <div className={styles.menu}>
                    <a className={styles.menu} href="/profile">Profile</a>
                </div>
                <div className={styles.menu}>
                    <a className={styles.menu} href="/dialogues">Messages</a>
                </div>
                <div className={styles.menu}>News</div>
                <div className={styles.menu}>Music</div>
                <div className={styles.menu}>Settings</div>
            </nav>
        )
}

export default Sidebar;