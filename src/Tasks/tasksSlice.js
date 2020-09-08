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

        toggleTaskDone: ({ tasks }, {payload}) => {
            tasks.forEach(task => {
                if (task.id === payload) {
                    task.done = !task.done;
                };
            });
        },
    },
});

export const { addNewTask, toggleTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer; 