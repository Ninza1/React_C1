import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import Tasks from "./Task/Task"
import Task from "./Task/Task"
import { TaskHeader } from "./TaskHeader";
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <h1>this is taskApp page</h1>
      <TaskHeader/>
      <AddTask/>
      <Tasks />
            {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
