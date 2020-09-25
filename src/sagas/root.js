import { all, call } from "redux-saga/effects";
import { watchTaskChangeSaga } from "./localStorageSaga";
import { watchGetSampleTasks } from "./sampleTasksSaga";

export default function* () {
    yield all([call(watchTaskChangeSaga), call(watchGetSampleTasks)]);
}
