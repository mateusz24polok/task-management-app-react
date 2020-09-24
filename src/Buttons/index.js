import React from 'react';
import { StyledLineButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllTasksDone } from "../Tasks/tasksSlice";

const Buttons = () => {
    const { tasks, isDoneTasksHidden } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <>
                <StyledLineButton
                    hide
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {isDoneTasksHidden ? "Show done tasks" : "Hide done tasks"}
                </StyledLineButton>

                <StyledLineButton
                    toggleDone
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(setAllTasksDone())}
                >
                    Set all tasks done
            </StyledLineButton>
            </>
        )
    );
};

export default Buttons;