import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import User from "./User/User";

import styles from "./Content.module.css"

const Content = (props) => {
    console.log(props);
    return (
        <div className={styles.content}>
            <div>
                <img 
                    alt="img" 
                    className={styles.topImage}
                    src="https://yhelteljel.ee/wp-content/uploads/2011/05/SDIM3765_s.jpg">
                </img>
            </div>
            <User />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Content;