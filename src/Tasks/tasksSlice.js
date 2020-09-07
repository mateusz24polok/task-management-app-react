import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "slice",
    initialState: {
        tasks: [
            {
                description: "Task 1",
                done: false,
                id: 1,
            },
            {
                description: "Task 2",
                done: true,
                id: 2,
            }
        ],
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