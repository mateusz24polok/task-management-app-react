import React, { useState, useRef } from "react";
import { NewTaskForm, NewTaskInput, NewTaskButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [taskDescription, setTaskDescription] = useState("");
    const inputRef = useRef(null);

    const inputFocus = () => {
        inputRef.current.focus();
    };

    const onInputChange = (event) => {
        setTaskDescription(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (taskDescription.trim()) {
            addNewTask(taskDescription.trim());
        }
        setTaskDescription("");
        inputFocus();
    }
    return (
        <NewTaskForm onSubmit={onFormSubmit}>
            <NewTaskInput ref={inputRef} value={taskDescription} onChange={onInputChange} placeholder="What's to do?" autoFocus />
            <NewTaskButton>Add task</NewTaskButton>
        </NewTaskForm>
    )
}

export default Form;