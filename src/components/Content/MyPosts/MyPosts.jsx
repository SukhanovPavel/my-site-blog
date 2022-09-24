import Posts from "./Posts/Posts";

import styles from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={styles.myPostInput}>
            <div className={styles.myPostInput}>
                <h3>My posts</h3>
                <div className={styles.newPost}>
                    <textarea placeholder="What's new with you?" rows="2"></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            </div>
            <Posts message='Hi! How are yoy?' likeCount='10'/>
            <Posts message='It is my first post' likeCount='25'/>
        </div>
    )
}

export default MyPosts;