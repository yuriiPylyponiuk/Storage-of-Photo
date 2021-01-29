import * as types from './randomPhotoActionTypes';

export function getRandomPhotoReq(){
  return {type: types.GET_RANDOM_PHOTO_REQUEST}
}
export function getRandomPhotoSec(payload){
  return {type: types.GET_RANDOM_PHOTO_SECCESS, payload}
}
export function getFullUrl(payload){
  return {type: types.GET_FULL_URL, payload}
}
