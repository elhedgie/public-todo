import React, { useState } from "react";
import { useEffect } from "react";
import { DeleteBtn } from "./DeleteBtn";
import './main.css'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoItem(props) {
    const [openState, setOpenState] = useState(false)
    const [checkedState, setCheckedState] = useState(false)
    const [arrowState, setArrowState] = useState(false)
   
    function doneMaker() {
        setOpenState(!openState)
        setArrowState(!arrowState)
       
    }
    
        return ( 
            <li className="item-wrap" >
                <div className="wrap-todo">
                    <label className="item-label">
                        
                        <input 
                        onChange={()=>{setCheckedState(!checkedState); props.item.done=!checkedState
                            localStorage.clear()
                            localStorage.setItem('todo', JSON.stringify(props.anItems))}} 
                        checked={checkedState} 
                        className="default-radio" 
                        type="checkbox"/>
                        <span className={props.item.done ? "custom-radio done-radio" : "custom-radio" }></span>
                        <div className={props.item.done ? "todo-item done" : "todo-item"}>{props.item.text}</div>
                    </label>
                        <div 
                        className={arrowState ? "arrow clicked" : "arrow"} 
                        onClick={doneMaker}>
                        </div>
                        <DeleteBtn setItemsState={props.setItemsState} id={props.item.id} anItems={props.anItems}></DeleteBtn>
                </div>
                <div className={openState ? 'inner open' : 'inner closed'}>
                    <TodoForm id={props.item.id} itemsSet={props.itemsSet}></TodoForm>
                    <TodoList setItemsState={props.setItemsState} itemsSet={props.itemsSet} anItems={props.anItems} items={props.anItems.filter(el=>el.parentId===props.item.id)}>  
                    </TodoList>
                </div>
            </li>
        )
    
    
}