
import styles from "./Posts.module.css";

const Posts = (props) => {
    return (
        <div className={styles.myPosts}>
            <div className={styles.itemPost}>
                <img 
                    src="https://yt3.ggpht.com/ytc/AKedOLSa2NpRoEXSLM6ey1P7DAtlK5ZnI1zkoVHeQZuv=s900-c-k-c0x00ffffff-no-rj"
                    className={styles.avatarSmall}  
                />
                {props.message}
            </div>
            <div>
                <span>like </span>{props.likeCount}
            </div>
        </div>
    )
}

export default Posts;