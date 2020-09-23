import { all, call } from "redux-saga/effects";
import { watchTaskChangeSaga } from "./localStorageSaga";

export default function* () {
    yield all([call(watchTaskChangeSaga)]);
}
