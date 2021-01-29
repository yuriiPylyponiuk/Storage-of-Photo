import * as types from './randomPhotoActionTypes';

const initialState = {
  photo: false,
  loaded: false,
  progress: false,
  url:''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RANDOM_PHOTO_REQUEST:
      return{
        ...state,
        photo: false,
        loaded: false,
        progress: true
      }
    case types.GET_RANDOM_PHOTO_SECCESS:
      return{
        ...state,
        photo: action.payload,
        loaded: true,
        progress: false
      }
    case types.GET_FULL_URL:
      return{
        ...state,
        url: action.payload
      }
      default: 
      return state;
  }
}