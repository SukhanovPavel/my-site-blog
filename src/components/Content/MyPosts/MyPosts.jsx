import React from "react";
import Posts from "./Posts/Posts";

import styles from "./MyPosts.module.css";


const MyPosts = (props) => {
    
    const post = props.posts.map( p => <Posts message={p.message} likeCount={p.likeCount} />)

    let createPostRef = React.createRef();
    
    

    return (
        <div className={styles.myPostInput}>
            <div className={styles.myPostInput}>
                <h3>My posts</h3>
                <div className={styles.newPost}>
                    <textarea 
                        ref={createPostRef}
                        plaseholder="What's new with you?" 
                        rows="2"
                        className={styles.textarea}>
                    </textarea>
                    <button onClick={() => props.addPost(createPostRef)} className={styles.button}>Send</button>
                </div>
            </div>
            {post}
        </div>
    )
}

export default MyPosts;