import React, { useState } from "react";
import { useEffect } from "react";
import { CleanAllBtn } from "./CleanAllBtn";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContainer() {
    let localSt = localStorage.getItem('todo')
    const [itemsState, setItemsState] = useState(localSt ? JSON.parse(localSt):[])
    useEffect(()=>localStorage.setItem('todo', JSON.stringify(itemsState)))
    
    
    
    
    function itemsSet(value) {
        setItemsState([...itemsState, value])
    }
    return (
        <div className="container">
            <TodoForm itemsSet={itemsSet}></TodoForm>
            
            <TodoList setItemsState={setItemsState} itemsSet={itemsSet} anItems={itemsState} items={itemsState.filter(el=>el.parentId===null)}>
            </TodoList>
            <CleanAllBtn setItemsState={setItemsState}></CleanAllBtn>
        </div>
    )
    
   
    
    
}

