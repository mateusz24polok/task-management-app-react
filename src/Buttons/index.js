import React from 'react';
import { LineButton } from "./styled";

const Buttons = ({ tasks, isDoneTasksHidden, toggleHideDone, setAllTasksDone }) => (
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

export default Buttons;