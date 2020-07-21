import React from "react";
import "./style.css";

const Tasks = ({tasks, isDoneTasksHidden, removeTask}) => (
    <ul className="tasksSection__list">
        {tasks.map(task => (
            <li key={task.id} className={`tasksSection__listItem ${isDoneTasksHidden && task.done ? "tasksSection__listItem--hidden" : ""}`}>
                <button className={`tasksSection__listItemButton tasksSection__listItemButton--done`}>{task.done ? "✔" : ""}</button>
                <p className={`tasksSection__listItemText ${task.done ? "tasksSection__listItemText--done" : ""}`}>{task.description}</p>
                <button onClick={()=>removeTask(task.id)} className={`tasksSection__listItemButton tasksSection__listItemButton--delete`}>🗑</button>
            </li>
        )
        )}
    </ul >
);

export default Tasks;