import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Form from "../Form";

const NewTaskForm = () => {
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
        <Form
            onFormSubmit={onFormSubmit}
            inputRef={inputRef}
            inputValue={taskDescription}
            onInputChange={onInputChange}
            inputPlaceholder="What's to do?"
            buttonContent="Add Task"
        />
    )
}

export default NewTaskForm;