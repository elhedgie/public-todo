import React from "react";
import './main.css'

export const CleanAllBtn = (props) => {
    return (
        <button onClick={(e)=>{e.preventDefault(); props.setItemsState([])}} className="clean-btn">Очистить список</button>
    )

}