import UserDialog from "./User/UserDialog";
import Messages from "./Messages/Messages";

import styles from "./Dialogue.module.css";

const Dialogue = (props) => {
    console.log(props);
    const dialogueElement = props.users.map(names => <UserDialog name={names.name}/>);
    const messages = props.messages.map( m => <Messages id={m.id} message={m.message} image={m.image}/>);
    
    return (
        <div className={styles.d}>
            <div className={styles.dialogues}>
                {dialogueElement}
            </div>
            <div className={styles.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogue;