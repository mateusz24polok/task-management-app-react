import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getSampleTasks, setExampleTasks, getSampleTasksErrorHandle, resetExampleTasksLoadingError } from "../components/Tasks/tasksSlice";

const fetchSampleTasks = async () => {
    try {
        const response = await fetch("sampleTasks.json");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw new Error(err)
    }
}

function* getSampleTasksGenerator() {
    try {
        yield delay(1000);
        const sampleTasksResponse = yield call(fetchSampleTasks);
        yield put(setExampleTasks(sampleTasksResponse));
    } catch {
        yield put(getSampleTasksErrorHandle());
        yield delay(2000);
        yield put(resetExampleTasksLoadingError());
    }
}

export function* watchGetSampleTasks() {
    yield takeLatest(getSampleTasks.type, getSampleTasksGenerator);
}