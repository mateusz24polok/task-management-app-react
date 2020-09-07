import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../src/Tasks/tasksSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});