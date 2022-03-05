import React, { useState } from "react"
import MyItem from "./item"

export default function MyList (props){
    return(
        <div className="main-list-wrap" >
                <ul className="wrap-list">
                {props.items.map(item=> 
                    <MyItem key={Math.random()} item={item}></MyItem>
                    )
                }
            </ul>
        </div>
    )
    
}