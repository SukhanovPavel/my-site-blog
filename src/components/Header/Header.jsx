import React from "react"

import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img alt="img" className={styles.img} src="https://www.btgunlugu.com/wp-content/uploads/2020/02/1582016460_yeni_LOGO_logosu.jpg"/>
        </div>
    )
}

export default Header;