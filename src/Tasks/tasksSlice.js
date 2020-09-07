import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "slice",
    initialState: {
        tasks: [],
    },
    reducers: {
        addNewTask: ({ tasks }, { payload }) => {
            tasks.push(payload)
        },
    },
});

export const { addNewTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer; 