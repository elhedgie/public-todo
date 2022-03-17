import React from "react"
import TodoItem from "./TodoItem"

export default function TodoList (props){
    
    return(
        <div className="main-list-wrap" >
                <ul className="wrap-list">
                {props.items.map(item=> 
                    <TodoItem setItemsState={props.setItemsState} itemsSet={props.itemsSet} anItems={props.anItems} key={item.id} items={props.items} item={item}></TodoItem>
                    )
                }
            </ul>
        </div>
    )
    
}