import {NavLink} from "react-router-dom";

import styles from "./UserDialog.module.css";

const UserDialog = (props) => {
    return (
        <div>
            <NavLink className={({ isActive }) => (isActive? styles.activeName : styles.userName)} to="/dialogues/1">{props.name}</NavLink>
        </div>
    )
}

export default UserDialog;