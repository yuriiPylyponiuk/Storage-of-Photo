import {all, fork} from "redux-saga/effects"
import getAllPhotosSaga from "./listOfPhotos/listPhotosSagas";
import getRandomPhotoSaga from "./randomPhotos/randomPhotoSagas";

export default function* rootSaga() {
    yield all([
        getAllPhotosSaga(),
        getRandomPhotoSaga()
    ]);
}