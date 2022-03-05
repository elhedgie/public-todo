import React, { useState } from "react";
import './main.css'
import './innerlist.css'
import MyList from "./list";
import TodoForm from "./todoForm";

export default function MyItem(props) {
    const [openState, setOpenState] = useState(false)
    const [subtaskState, setSubtaskState] = useState([])
    const [checkedState, setCheckedState] = useState(false)
    const [arrowState, setArrowState] = useState(false)
       
    function doneMaker() {
        setOpenState(!openState)
        setArrowState(!arrowState)
        props.item.subTask = true
    }
   
    function markAsDone() {
        setCheckedState(!checkedState)
    }
    function itemsSet(value) {
        setSubtaskState(value)
    }
    
        return ( 
            <li className="item-wrap" >
                <div className="wrap-todo">
                    <label className="item-label">
                        
                        <input onChange={markAsDone} checked={checkedState} className="default-radio" type="checkbox"/>
                        <span className="custom-radio"></span>
                        <div className="todo-item">{props.item.text}</div>
                    </label>
                        <div className={arrowState ? "arrow clicked" : "arrow"} onClick={doneMaker}></div>
                </div>
                <div className={openState ? 'inner open' : 'inner closed'}>
                    <TodoForm itemsSet={itemsSet}></TodoForm>
                    <MyList items={subtaskState}></MyList>
                </div>
            </li>
        )
    
}