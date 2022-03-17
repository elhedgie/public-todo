import React from "react";
import './main.css'

export const DeleteBtn = (props) => {

    function deletion() {
        props.setItemsState(props.anItems.filter(el=> el.id !== props.id ))

    }
    return(
        <button onClick={deletion} className="delete-btn"></button>
    )
}