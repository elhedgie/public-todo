import React from "react";

export default function TodoInput(props) {
    return(
        <input className="my-input" type="text" onChange={(e)=> props.changer(e.target.value)}/>
    )

}