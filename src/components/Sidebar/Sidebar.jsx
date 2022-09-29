import React from "react";
import {NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
    let sidebarFriends = props.sidebarFriends.map(friend => {   
        return  <div className={styles.friend}>
                    {friend.name} 
                    <img 
                        className={styles.userImage}
                        src={friend.image}
                    />
                </div>
        }
        )
    return(
            <nav className={styles.nav}>
                
                <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/profile">Profile</NavLink>
                <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/dialogues">Messages</NavLink>
                <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/news">News</NavLink>
                <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/music">Music</NavLink>
                <NavLink className={({ isActive }) => (isActive? styles.active : styles.link)} to="/settings">Settings</NavLink>
                
                <div className={styles.friends}>
                    {sidebarFriends}
                </div>
            </nav>
        )
}

export default Sidebar;