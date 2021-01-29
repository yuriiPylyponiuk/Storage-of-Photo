import * as types from './listPhotosActionTypes';

const initialState = {
	products: {
    data: [],
    loaded: true,
    error: false,
    show: false
  }
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PHOTOS_ALL_REQUEST:
      return{
        ...state,
        products: {
          data: false,
          loaded: true,
          error: false,
          show: false
        }
      }
    case types.GET_PHOTOS_ALL_SECCESS:
      return{
        ...state,
        products: {
          data: action.payload,
          loaded: false,
          error: false,
          show: true
        }
      }
      default: 
      return state;
  }
}