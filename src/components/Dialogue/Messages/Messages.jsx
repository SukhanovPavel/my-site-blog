

import styles from "./Messages.module.css";

const Messages = (props) => {
    return (<>
        <div className={styles.messages}>
            <img 
                className={styles.userImage}
                src={props.image}
            />
            <div className={styles.messageContainer}>
                <div className={styles.message}>{props.message}</div>
            </div>
        </div>
         
        <div className={styles.messages}>
            <div className={styles.messageContainer}>
                <div className={styles.message}>{props.message}</div>
            </div>
            <img 
                className={styles.userImage}
                src={props.image}
            />
        </div>
    </>
    )
}

export default Messages;