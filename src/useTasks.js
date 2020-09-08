import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasksArray, setTasksArray] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksArray))
    }, [tasksArray]);

    const setAllTasksDone = () => {
        setTasksArray(tasksArray => tasksArray.map(task => {
            return {
                ...task,
                done: true,
            }
        }))
    }

    return (
        {
            setAllTasksDone,
        }
    )
};