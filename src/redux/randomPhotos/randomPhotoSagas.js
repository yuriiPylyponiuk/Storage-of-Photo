import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './randomPhotoActionTypes';
import {getRandomPhotoSec} from './randomPhotoActions'
import {getRandomPhoto} from '../../libs/product'



export function*  getRandomPhotoByClick() {
  const data = yield call(getRandomPhoto)
  
  yield put(getRandomPhotoSec(data))
}

export default function* getRandomPhotoSaga() {
  yield takeLatest(types.GET_RANDOM_PHOTO_REQUEST, getRandomPhotoByClick);
}