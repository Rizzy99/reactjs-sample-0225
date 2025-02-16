import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../src/components/TaskList";

test("adds a new task and marks it as completed", () => {
    render(<TaskList />);

    const addButton = screen.getByText("+ Add a task");
    fireEvent.click(addButton);  // Add a task

    const newTask = screen.getByText("New Task");
    expect(newTask).toBeInTheDocument();

    const completeButton = screen.getByText("Mark Complete");
    fireEvent.click(completeButton); // Mark as completed

    expect(screen.getByText("Completed")).toBeInTheDocument();
});

test("adds and deletes a task", () => {
    render(<TaskList />);

    const addButton = screen.getByText("+ Add a task");
    fireEvent.click(addButton);  // Add a task

    const newTask = screen.getByText("New Task");
    expect(newTask).toBeInTheDocument();

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);  // Delete task

    expect(screen.queryByText("New Task")).not.toBeInTheDocument();
});

