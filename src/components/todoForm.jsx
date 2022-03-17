import React, { useState } from "react";
import TodoInput from "./TodoInput";
import './main.css'
import Button from "./Button";
import addTodo from "./addTodo.js";




export default function TodoForm(props) {
    const [inputState, setInputState] = useState('')
    return(
        <form className="my-form" onSubmit={submitter}>
            <TodoInput changer={changer} value={inputState}></TodoInput>
            <Button></Button>
        </form>
    )
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
    
}