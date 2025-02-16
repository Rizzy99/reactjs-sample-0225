import { useState } from "react";
import TaskCard from "./TaskCard";
import styles from "../styles/TaskList.module.css";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className={styles.taskList}>
            <h3>My Tasks</h3>
            <button onClick={() => addTask({ id: Date.now(), title: "New Task", completed: false })}>+ Add a task</button>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
};

export default TaskList;

