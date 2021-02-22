import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './photoitemActionTypes';
import {getFilteredPhotoSec} from './photoitemActions'
import {getFilterOnPhotoById} from '../../libs/product'


export function*  getNewPhoto(action) {
  console.log(action)
  const data = yield call(getFilterOnPhotoById, {...action})
  yield put(getFilteredPhotoSec(data))
}


export default function* getPhotoPageByIg() {
  yield takeLatest(types.GET_PHOTO_BY_ID_REQ, getNewPhoto);
}