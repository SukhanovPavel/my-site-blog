import React from "react";

import styles from "./Content.module.css"

const Content = () => {
    return (
        <div className={styles.content}>
            <div>
                <img 
                    alt="img" 
                    className={styles.topImage}
                    src="https://yhelteljel.ee/wp-content/uploads/2011/05/SDIM3765_s.jpg">
                </img>
            </div>
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
            <div className={styles.myPostInput}>
                <h3>My posts</h3>
                <div className={styles.newPost}>
                    <textarea cols="40" rows="3"></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            </div>
            <div className={styles.myPosts}>
                <img 
                    src="https://yt3.ggpht.com/ytc/AKedOLSa2NpRoEXSLM6ey1P7DAtlK5ZnI1zkoVHeQZuv=s900-c-k-c0x00ffffff-no-rj"
                    className={styles.avatarSmall}  
                />
                <div>My first post</div>
            </div>
        </div>
    )
}

export default Content;