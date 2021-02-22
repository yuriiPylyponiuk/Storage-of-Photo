import * as types from './photoitemActionTypes';

export function getPhotoById(payload){
  return {type: types.GET_PHOTO_BY_ID_REQ, payload}
}
export function getFilteredPhotoSec(payload){
  return {type: types.GET_PHOTO_BY_ID_SEC, payload}
}