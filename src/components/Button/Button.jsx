import React from "react";
import styles from "./Btn.module.css";
function Button(props) {
  return (
    <button {...props} className={styles.mybtn}>
      {props.children}
    </button>
  );
}

export default Button;
