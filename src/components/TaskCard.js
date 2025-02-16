import { useState } from "react";
import styles from "../styles/TaskCard.module.css";

const TaskCard = ({ task }) => {
    const [completed, setCompleted] = useState(task.completed);

    return (
        <div className={`${styles.taskCard} ${completed ? styles.completed : ""}`}>
            <p>{task.title}</p>
            <button onClick={() => setCompleted(!completed)}>
                {completed ? "Completed" : "Mark Complete"}
            </button>
        </div>
    );
};

export default TaskCard;
