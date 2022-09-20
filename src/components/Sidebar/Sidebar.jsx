import React from "react";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return(
            <nav className={styles.nav}>
                <div className={styles.menu}>Profile</div>
                <div className={styles.menu}>Messages</div>
                <div className={styles.menu}>News</div>
                <div className={styles.menu}>Music</div>
                <div className={styles.menu}>Settings</div>
            </nav>
        )
}

export default Sidebar;