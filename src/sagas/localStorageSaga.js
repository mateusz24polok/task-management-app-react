import { call, takeEvery, select } from "redux-saga/effects";
import { selectTasks } from "../Tasks/tasksSlice";
import { saveTasksInLocalStorage } from "../Tasks/localStorageFunctions";

function* setLocalStorageTask() {
    yield console.log("Jesteśmy w sadze");
    const { tasks } = yield select(selectTasks);
    yield console.log(tasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchTaskChangeSaga() {
    yield takeEvery("*", setLocalStorageTask);
}
