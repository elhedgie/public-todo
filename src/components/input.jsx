import React, { useEffect, useState } from "react";
import MyList from "./list";
import TodoForm from "./todoForm";

export default function MyInput (props) {
    
    const [itemsState, setItemsState] = useState([])
    useEffect(()=> localStorage.setItem('todo', JSON.stringify(itemsState))
    , [itemsState])
    
    
    
    
    function itemsSet(value) {
        setItemsState(value)
    }
    return (
        <div className="container">
            <TodoForm itemsSet={itemsSet}></TodoForm>
            
            <MyList items={itemsState}></MyList>
        </div>
    )
    
   
    
    
}

