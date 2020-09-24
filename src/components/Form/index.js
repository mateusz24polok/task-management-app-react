import React, { useState, useRef } from "react";
import { NewTaskForm, NewTaskInput, NewTaskButton } from "./styled";
import { useDispatch } from "react-redux";
import { addNewTask } from "../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [taskDescription, setTaskDescription] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const inputFocus = () => {
        inputRef.current.focus();
    };

    const onInputChange = (event) => {
        setTaskDescription(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (taskDescription.trim()) {
            dispatch(addNewTask({
                description: taskDescription.trim(),
                id: nanoid(),
                done: false
            }))
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