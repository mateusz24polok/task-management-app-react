import React from 'react';
import { LineButton } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks } from "../Tasks/tasksSlice";

const Buttons = ({ isDoneTasksHidden, toggleHideDone, setAllTasksDone }) => {
    const { tasks } = useSelector(selectTasks);
    return (
        tasks.length > 0 && (
            <>
                <LineButton
                    hide
                    onClick={toggleHideDone}
                >
                    {isDoneTasksHidden ? "Show done tasks" : "Hide done tasks"}
                </LineButton>

                <LineButton
                    toggleDone
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllTasksDone}
                >
                    Set all tasks done
            </LineButton>
            </>
        )
    );
};

export default Buttons;