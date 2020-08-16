import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask, inputRef }) => {
    const [taskDescription, setTaskDescription] = useState("");

    const onInputChange = (event) => {
        setTaskDescription(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (taskDescription.trim()) {
            addNewTask(taskDescription.trim());
        }
        setTaskDescription("");
    }
    return (
        <form onSubmit={onFormSubmit} className="newTaskSection__form">
            <input ref={inputRef} value={taskDescription} onChange={onInputChange} className="newTaskSection__input" placeholder="What's to do?" autoFocus />
            <button className="newTaskSection__button">Add task</button>
        </form>
    )
}

export default Form;