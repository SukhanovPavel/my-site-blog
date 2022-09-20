

import styles from "./User.module.css";

const User = () => {
    return (
        <div className={styles.user}>
            <img 
                src="https://yt3.ggpht.com/ytc/AKedOLSa2NpRoEXSLM6ey1P7DAtlK5ZnI1zkoVHeQZuv=s900-c-k-c0x00ffffff-no-rj"
                className={styles.avatar}  
            />
            <div>
                <h3>My name</h3>
                <div>Birthday</div>
                <div>City</div>
                <div>Education</div>
            </div>
        </div>
    )
}

export default User;