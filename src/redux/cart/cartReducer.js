import * as types from './cartActionTypes';

const initialState = {
  list: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BUY_PHOTO:
      return{
        ...state,
        list: [],
      }
    default: 
      return state;
  }
}