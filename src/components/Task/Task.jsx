import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = (props) => {
 
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
      {props.text}
      </div>
      <Counter/>
      {/* Counter here */}
      <button data-cy="task-remove-button" >×</button>
    </li>
    
    
    
  );
};

export default Task;
