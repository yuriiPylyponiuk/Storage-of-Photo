import * as types from './listPhotosActionTypes';

export function getAllPhotosSuccessAction(payload){
  return {type: types.GET_PHOTOS_ALL_SECCESS, payload}
}

export function getAllPhotosRequestAction(payload){
  return {type: types.GET_PHOTOS_ALL_REQUEST, payload}
}