import React from "react";
import { TasksList, TaskItem, TaskContent, Button } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

const Tasks = ({ isDoneTasksHidden, removeTask, toggleTaskDone }) => {
    const { tasks } = useSelector(selectTasks);
    return (
        <TasksList>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    hidden={isDoneTasksHidden && task.done}
                >
                    <Button
                        onClick={() => toggleTaskDone(task.id)}
                        done
                    >
                        {task.done ? "✔" : ""}
                    </Button>

                    <TaskContent done={task.done}>{task.description}</TaskContent>

                    <Button
                        onClick={() => removeTask(task.id)}
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