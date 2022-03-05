import React, { useEffect, useState } from "react";
import MyBtn from "./button";
import TodoInput from "./todoInput";
import './main.css'

export default function TodoForm(props) {
    const [idState, setIdState] = useState(0)
    const [formState, setFormState] = useState([])
    const [inputState, setInputState] = useState('')
    useEffect(()=>props.itemsSet(formState), [formState])
    return(
        <form className="my-form" onSubmit={submitter}>
            <TodoInput changer={changer}></TodoInput>
            <MyBtn></MyBtn>
        </form>
    )

    function changer(value) {
        setInputState(value)
    }
    function submitter(e) {
        e.preventDefault();
        if (inputState.length === 0) {
            return;
        }
        setFormState([...formState, {text: inputState, id: idState, subTask: false}])
        setIdState(idState+1)
    }
}