import Posts from "./Posts/Posts";

import styles from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={styles.myPostInput}>
            <div className={styles.myPostInput}>
                <h3>My posts</h3>
                <div className={styles.newPost}>
                    <textarea value="What's new with you?" cols="40" rows="3"></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            </div>
            <Posts message='Hi! How are yoy?'/>
            <Posts message='It is my first post'/>
        </div>
    )
}

export default MyPosts;