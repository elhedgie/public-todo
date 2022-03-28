import React from "react";
import styles from './ToDoInput.module.css'

export default function ToDoInput(props) {
    return(
        <input className={styles.myInput}type="text" onChange={(e)=> props.changer(e.target.value)}/>
    )

}