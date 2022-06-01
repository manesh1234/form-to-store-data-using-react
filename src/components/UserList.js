
import React from "react";
import Card from "../UI/Card";
import styles from './UserList.module.css';

const UserList = (props) => {
    if(props.users.length === 0){
        return <div className="hide"></div>;
    }
    return (
        <Card className={`${styles.users}`}>
            <ul>
                {
                    props.users.map(user => 
                    <li key={user.id}>
                    <div>{user.name}</div>
                    <div>({user.age} years old)</div> </li>)
                }
            </ul>
        </Card> 
    );
}

export default UserList;