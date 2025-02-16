import { useState } from 'react';
import styles from "../styles/TaskCard.module.css";

interface Task {
    name: string;
    details: string;
    date: string;
}

const TaskCard = ({ task }: { task: Task }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className={styles.taskCard}>
            <h3>{task.name}</h3>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide details" : "Show details"}
            </button>
            {showDetails && <p>{task.details}</p>}
            <p>{task.date}</p>
        </div>
    );
}

export default TaskCard;

