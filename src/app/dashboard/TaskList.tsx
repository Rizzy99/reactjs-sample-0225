"use client";

import { useState, useEffect } from "react";


interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
    completed: boolean;
}

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        // Reminder notifications
        const interval = setInterval(() => {
            const now = new Date();
            tasks.forEach((task) => {
                const taskDateTime = new Date(task.date);
                if (taskDateTime <= now && !task.completed) {
                    alert(`Reminder: ${task.title} is due today!`);
                }
            });
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() !== "" && taskDate.trim() !== "") {
            setTasks([
                ...tasks,
                {
                    id: Date.now(),
                    title: newTask,
                    description: taskDetails,
                    date: taskDate,
                    completed: false,
                },
            ]);
            setNewTask("");
            setTaskDetails("");
            setTaskDate("");
            setIsAdding(false);
        }
    };

    const editTask = (taskId: number) => {
        const taskToEdit = tasks.find((task) => task.id === taskId);
        if (taskToEdit) {
            setNewTask(taskToEdit.title);
            setTaskDetails(taskToEdit.description);
            setTaskDate(taskToEdit.date);
            setIsEditing(taskId);
        }
    };

    const updateTask = () => {
        setTasks(
            tasks.map((task) =>
                task.id === isEditing
                    ? { ...task, title: newTask, description: taskDetails, date: taskDate }
                    : task
            )
        );
        setNewTask("");
        setTaskDetails("");
        setTaskDate("");
        setIsEditing(null);
    };

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleComplete = (taskId: number) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold">My Tasks</h3>

            <div className="mt-2">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`border p-2 rounded shadow my-2 ${
                            task.completed ? "bg-green-200" : "bg-white"
                        }`}
                    >
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-gray-600">{task.description}</p>
                        <p className="text-sm text-blue-600">Due: {task.date}</p>
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => toggleComplete(task.id)}
                                className="px-2 py-1 rounded bg-blue-500 text-white"
                            >
                                {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
                            </button>
                            <button
                                onClick={() => editTask(task.id)}
                                className="px-2 py-1 rounded bg-yellow-500 text-white"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="px-2 py-1 rounded bg-red-500 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isAdding || isEditing !== null ? (
                <div className="mt-4 p-2 border rounded shadow">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="border p-1 rounded w-full"
                    />
                    <textarea
                        placeholder="Task Details"
                        value={taskDetails}
                        onChange={(e) => setTaskDetails(e.target.value)}
                        className="border p-1 rounded w-full mt-2"
                    />
                    <input
                        type="datetime-local"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className="border p-1 rounded w-full mt-2"
                    />
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={() => {
                                setNewTask("");
                                setTaskDetails("");
                                setTaskDate("");
                                setIsEditing(null);
                                setIsAdding(false);
                            }}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={isEditing !== null ? updateTask : addTask}
                            className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
                        >
                            {isEditing !== null ? "Update Task" : "Add Task"}
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4"
                >
                    + Add a task
                </button>
            )}
        </div>
    );
}

