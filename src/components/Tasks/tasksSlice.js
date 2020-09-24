import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./localStorageFunctions";

const tasksSlice = createSlice({
    name: "slice",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        isDoneTasksHidden: false,
    },
    reducers: {
        addNewTask: ({ tasks }, { payload }) => {
            tasks.push(payload)
        },

        toggleTaskDone: ({ tasks }, { payload }) => {
            tasks.forEach(task => {
                if (task.id === payload) {
                    task.done = !task.done;
                };
            });
        },

        removeTask: ({ tasks }, action) => {
            const removeTaskIndex = tasks.findIndex(task => task.id === action.payload);
            tasks.splice(removeTaskIndex, 1);
        },

        setAllTasksDone: (state) => {
            state.tasks.forEach(task => task.done = true);
        },

        toggleHideDone: (state) => {
            state.isDoneTasksHidden = !state.isDoneTasksHidden;
        }
    },
});

export const { addNewTask, toggleTaskDone, removeTask, toggleHideDone, setAllTasksDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer; 