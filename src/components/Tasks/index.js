import React from "react";
import { TasksList, TaskItem, TaskContent, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectQueryTask, toggleTaskDone, removeTask } from "./tasksSlice";
import { useLocation } from "react-router-dom";

const Tasks = () => {
    const locationParams = useLocation();
    const searchParams = new URLSearchParams(locationParams.search);
    const queryTask = searchParams.get("task");
    const tasks = useSelector(state => selectQueryTask(state, queryTask));
    console.log(tasks);
    const { isDoneTasksHidden } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <TasksList>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    hidden={isDoneTasksHidden && task.done}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        done
                    >
                        {task.done ? "✔" : ""}
                    </Button>

                    <TaskContent done={task.done}>{task.description}</TaskContent>

                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        remove
                    >
                        🗑
                </Button>

                </TaskItem>
            )
            )}
        </TasksList>
    )
};

export default Tasks;