import React, { useState } from "react";
import ToDoInput from "../ToDoInput/ToDoInput";
import Button from "../Button/Button.jsx";
import addTodo from "../addTodo.js";
import styles from './ToDoForm.module.css'



export default function ToDoForm(props) {
    const [inputState, setInputState] = useState('')
    function changer(value) {
        setInputState(value)
    }
    async function submitter(e) {
        const todo = await addTodo({text: inputState, parentId: props.id ? props.id : null, done: false})
        e.preventDefault();
        if (inputState.length === 0) {
            return;
        }
        props.itemsSet(todo)
    }
    
    return(
        <form className={styles.myForm} onSubmit={submitter}>
            <ToDoInput changer={changer} value={inputState}></ToDoInput>
            <Button></Button>
        </form>
    )
}