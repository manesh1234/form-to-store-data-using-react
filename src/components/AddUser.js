
import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
    const username = useRef();
    const userage = useRef();
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredusername = username.current.value;
        const entereduserage = userage.current.value;
        if (enteredusername.trim().length === 0 || entereduserage.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'please enter a valid name and age(Non - empty values)',
            });
            return;
        }
        if (+entereduserage < 1) {
            setError({
                title: 'Invalid Age',
                message: 'please enter a valid age(>0)',
            });
            userage.current.value = '';
            return;
        }
        props.onAddUser(enteredusername, entereduserage);
        username.current.value = '';
        userage.current.value = '';
    }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} error={errorHandler}/> }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type={"text"} ref={username} ></input>
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type={"number"} ref={userage} ></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;