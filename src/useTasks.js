import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasksArray, setTasksArray] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksArray))
    }, [tasksArray])



    const removeTask = (id) => {
        setTasksArray(tasksArray => tasksArray.filter(task => task.id !== id));
    }

    const toggleTaskDone = (id) => {
        setTasksArray(tasksArray => tasksArray.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task
        })
        );
    };

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
            removeTask,
            toggleTaskDone,
            setAllTasksDone,
        }
    )
};