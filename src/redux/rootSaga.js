import {all, fork} from "redux-saga/effects"
import getAllPhotosSaga from "./listOfPhotos/listPhotosSagas";
import getRandomPhotoSaga from "./randomPhotos/randomPhotoSagas";
import getPhotoPageByIg from "./photoitem/photoitemSagas";

export default function* rootSaga() {
    yield all([
        getAllPhotosSaga(),
        getRandomPhotoSaga(),
        getPhotoPageByIg()
    ]);
}