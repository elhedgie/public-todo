import React from "react";
import TodoItem from "../ToDoItem/ToDoItem.jsx";
import styles from "./ToDoList.module.css";

export default function ToDoList(props) {
  return (
    <div className={styles.mainListWrap}>
      <ul>
        {props.items.map((item) => (
          <TodoItem
            setItemsState={props.setItemsState}
            itemsSet={props.itemsSet}
            anItems={props.anItems}
            key={item.id}
            items={props.items}
            item={item}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
}
