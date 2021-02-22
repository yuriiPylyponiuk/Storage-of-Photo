import * as types from './photoitemActionTypes';

const initialState = {
  data: '',
  loaded: false,
  progress: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PHOTO_BY_ID_REQ:
      return{
        ...state,
        data: false,
        loaded: false,
        progress: true
      }
    case types.GET_PHOTO_BY_ID_SEC:
      return{
        ...state,
        data: action.payload,
        loaded: true,
        progress: false
      }
    default: 
      return state;
  }
}