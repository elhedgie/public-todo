import React, { useState } from "react";
import { DeleteBtn } from "../DeleteBtn/DeleteBtn.jsx";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList.jsx";
import styles from "./ToDoItem.module.css";

export default function ToDoItem(props) {
  const [openState, setOpenState] = useState(false);
  const [checkedState, setCheckedState] = useState(false);
  const [arrowState, setArrowState] = useState(false);
  let itemClass;
  let radioClass;
  let arrowClass;
  let openClass;
  function doneMaker() {
    setOpenState(!openState);
    setArrowState(!arrowState);
  }
  if (props.item.done) {
    radioClass = styles.customRadio + " " + styles.doneRadio;
    itemClass = styles.todoItem + " " + styles.done;
  } else {
    radioClass = styles.customRadio;
    itemClass = styles.todoItem;
  }
  if (arrowState) {
    arrowClass = styles.arrow + " " + styles.clicked;
  } else {
    arrowClass = styles.arrow;
  }
  if (openState) {
    openClass = styles.inner + " " + styles.open;
  } else {
    openClass = styles.inner + " " + styles.closed;
  }
  return (
    <li className={styles.itemWrap}>
      <div className={styles.wrapTodo}>
        <label className={styles.itemLabel}>
          <input
            onChange={() => {
              setCheckedState(!checkedState);
              props.item.done = !checkedState;
              localStorage.clear();
              localStorage.setItem("todo", JSON.stringify(props.anItems));
            }}
            checked={checkedState}
            className={styles.defaultRadio}
            type="checkbox"
          />
          <span className={radioClass}></span>
          <div className={itemClass}>{props.item.text}</div>
        </label>
        <div className={arrowClass} onClick={doneMaker}></div>
        <DeleteBtn
          setItemsState={props.setItemsState}
          id={props.item.id}
          anItems={props.anItems}
        ></DeleteBtn>
      </div>
      <div className={openClass}>
        <ToDoForm id={props.item.id} itemsSet={props.itemsSet}></ToDoForm>
        <ToDoList
          setItemsState={props.setItemsState}
          itemsSet={props.itemsSet}
          anItems={props.anItems}
          items={props.anItems.filter((el) => el.parentId === props.item.id)}
        ></ToDoList>
      </div>
    </li>
  );
}
