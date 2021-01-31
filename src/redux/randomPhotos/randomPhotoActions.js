import * as types from './randomPhotoActionTypes';

export function getRandomPhotoReq(){
  return {type: types.GET_RANDOM_PHOTO_REQUEST}
}
export function getRandomPhotoSec(payload){
  return {type: types.GET_RANDOM_PHOTO_SECCESS, payload}
}
export function getFilteredPhotoSec(payload){
  return {type: types.GET_FILTERED_PHOTO_SECCESS, payload}
}
export function getGrayScale(payload){
  return {type: types.GET_GRAY_PHOTO, payload}
}
export function getBlureFirst(payload){
  console.log(payload)
  return {type: types.GET_BLURE1_PHOTO, payload}
}
export function getBlureSecond(payload){
  console.log(payload)
  return {type: types.GET_BLURE2_PHOTO, payload}
}
