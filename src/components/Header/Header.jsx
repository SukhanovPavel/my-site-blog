import React from "react"

import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img 
                alt="img" 
                className={styles.img} 
                src="https://simg.nicepng.com/png/small/232-2326770_icon-blogger-logo-now-creative-group-logo.png"
            />
        </div>
    )
}

export default Header;