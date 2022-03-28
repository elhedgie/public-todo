import React, { useState } from "react";
import { useEffect } from "react";
import { CleanAllBtn } from "../CleanAllBtn/CleanAllBtn.jsx";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList.jsx";
import styles from './ToDoContainer.module.css'

export default function ToDoContainer() {
    let localSt = localStorage.getItem('todo')
    const [itemsState, setItemsState] = useState(localSt ? JSON.parse(localSt):[])
    useEffect(()=>localStorage.setItem('todo', JSON.stringify(itemsState)))
    
    
    
    
    function itemsSet(value) {
        setItemsState([...itemsState, value])
    }
    return (
        <div className={styles.container}>
            <ToDoForm itemsSet={itemsSet}></ToDoForm>
            
            <ToDoList setItemsState={setItemsState} itemsSet={itemsSet} anItems={itemsState} items={itemsState.filter(el=>el.parentId===null)}>
            </ToDoList>
            <CleanAllBtn setItemsState={setItemsState}></CleanAllBtn>
        </div>
    )
    
   
    
    
}

