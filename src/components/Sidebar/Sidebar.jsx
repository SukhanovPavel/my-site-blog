import React from "react";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return(
            <nav className={styles.nav}>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
        )
}

export default Sidebar;