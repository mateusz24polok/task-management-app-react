import { call, takeEvery, select } from "redux-saga/effects";
import { selectTasks } from "../components/Tasks/tasksSlice";
import { saveTasksInLocalStorage } from "../components/Tasks/localStorageFunctions";

function* setLocalStorageTask() {
    const { tasks } = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchTaskChangeSaga() {
    yield takeEvery("*", setLocalStorageTask);
}
