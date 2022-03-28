import React from "react";
import styles from './DeleteBtn.module.css'

export const DeleteBtn = (props) => {

    function deletion() {
        props.setItemsState(props.anItems.filter(el=> el.id !== props.id ))

    }
    return(
        <button onClick={deletion} className={styles.deleteBtn}></button>
    )
}