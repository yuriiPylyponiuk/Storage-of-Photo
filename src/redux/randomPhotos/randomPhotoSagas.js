import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './randomPhotoActionTypes';
import {getRandomPhotoSec, getFilteredPhotoSec} from './randomPhotoActions'
import {getRandomPhoto, getFilterOnPhoto} from '../../libs/product'



export function*  getRandomPhotoByClick() {
  const data = yield call(getRandomPhoto)
  
  yield put(getRandomPhotoSec(data))
}


export function*  getNewPhoto(action) {
  const data = yield call(getFilterOnPhoto, {...action})
  yield put(getFilteredPhotoSec(data))
}




export default function* getRandomPhotoSaga() {
  yield takeLatest(types.GET_RANDOM_PHOTO_REQUEST, getRandomPhotoByClick);
  yield takeLatest(types.GET_GRAY_PHOTO, getNewPhoto);
  yield takeLatest(types.GET_BLURE1_PHOTO, getNewPhoto);
  yield takeLatest(types.GET_BLURE2_PHOTO, getNewPhoto);
}