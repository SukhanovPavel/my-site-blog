import React from "react"

import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img 
                alt="img" 
                className={styles.img} 
                src="https://cdn.worldvectorlogo.com/logos/vk-1.svg"
            />
        </div>
    )
}

export default Header;