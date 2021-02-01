import * as types from './cartActionTypes';

export function byuPhoto(){
  return {type: types.BUY_PHOTO}
}
export function deletePhoto(){
  return {type: types.DELETE_PHOTO}
}
// export function getRandomPhotoSec(payload){
//   return {type: types.DELETE_PHOTO, payload}
// }