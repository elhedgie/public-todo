import React from "react";
import styles from './CleanAllBtn.module.css'

export const CleanAllBtn = (props) => {
    return (
        <button className={styles.cleanBtn} onClick={(e)=>{e.preventDefault(); props.setItemsState([])}}>Очистить список</button>
    )

}