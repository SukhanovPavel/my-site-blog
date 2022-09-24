import React from "react";
import {NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return(
            <nav className={styles.nav}>
                <div >
                    <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/profile">Profile</NavLink>
                </div>
                <div className={styles.menu}>
                    <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/dialogues">Messages</NavLink>
                </div>
                <div className={styles.menu}>
                    <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/news">News</NavLink>
                </div>
                <div className={styles.menu}>
                    <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/music">Music</NavLink>
                </div>
                <div className={styles.menu}>
                    <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/settings">Settings</NavLink>
                </div>
            </nav>
        )
}

export default Sidebar;