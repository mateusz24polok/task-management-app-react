import React, { useState } from "react";
import { NewTaskForm, NewTaskInput, NewTaskButton } from "./styled";

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
        <NewTaskForm onSubmit={onFormSubmit}>
            <NewTaskInput ref={inputRef} value={taskDescription} onChange={onInputChange} placeholder="What's to do?" autoFocus />
            <NewTaskButton>Add task</NewTaskButton>
        </NewTaskForm>
    )
}

export default Form;