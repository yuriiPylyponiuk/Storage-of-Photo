import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './listPhotosActionTypes';
import {getAllPhotosSuccessAction} from './listPhotosActions'
import {getAllProduct} from '../../libs/product'



export function*  getPhotos(action) {
  
  const data = yield call(getAllProduct, {...action.payload})
    yield put(getAllPhotosSuccessAction(data.data))
}
export default function* getAllPhotosSaga() {
  yield takeLatest(types.GET_PHOTOS_ALL_REQUEST, getPhotos);
}