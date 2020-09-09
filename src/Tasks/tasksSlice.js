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
            console.log(removeTaskIndex);
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