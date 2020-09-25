import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./localStorageFunctions";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        isDoneTasksHidden: false,
        exampleTasksLoading: false,
        exampleTasksLoadingError: "",
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
        },

        getSampleTasks: (state) => {
            state.exampleTasksLoading = true;
        },

        getSampleTasksErrorHandle: (state) => {
            state.exampleTasksLoading = false;
            state.tasks = [];
            state.exampleTasksLoadingError = "Failed to load example tasks";
        },

        resetExampleTasksLoadingError: (state) => {
            state.exampleTasksLoadingError = "";
        },

        setExampleTasks: (state, { payload }) => {
            state.tasks = payload;
            state.exampleTasksLoading = false;
        }
    },
});

export const {
    addNewTask,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    setAllTasksDone,
    getSampleTasks,
    setExampleTasks,
    getSampleTasksErrorHandle,
    resetExampleTasksLoadingError,
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export const selectExampleTaskLoading = state => state.tasks.exampleTasksLoading;
export const selectExampleTaskLoadingError = state => state.tasks.exampleTasksLoadingError;
export default tasksSlice.reducer; 