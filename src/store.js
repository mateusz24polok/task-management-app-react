import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../src/Tasks/tasksSlice";
import createSaga from "redux-saga";
import rootSaga from "./sagas/root";

const sagaMiddleware = createSaga();

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
