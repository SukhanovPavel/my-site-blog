import React, {useState} from "react";
import Posts from "./Posts/Posts";

import styles from "./MyPosts.module.css";


const MyPosts = (props) => {
    
    const post = props.posts.map( p => <Posts message={p.message} likeCount={p.likeCount} />)

    const [ value, setValue ] = useState('')
    
    const handleClick = ( ) => {
        props.addPost(value);
    }

    const handleChange = ( event ) => {
        setValue(event.target.value)
    }

    const handleKeyDown = ({ keyCode }) => {
        if (keyCode == 13) {
            props.addPost(value);
        }
    }

    return (
        <div className={styles.myPostInput}>

            <div className={styles.myPostInput}>
                <h3>My posts</h3>
                <div className={styles.newPost}>
                    <textarea
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="What's new?"
                        rows="2"
                        className={styles.textarea}>
                    </textarea>
                    <button onClick={handleClick} className={styles.button}>Send</button>
                </div>
            </div>

            {post}
        </div>
    )
}

export default MyPosts;