import {combineReducers} from "redux";
import listPhotos from './listOfPhotos/listPhotosReducer'
import randomPhoto from './randomPhotos/randomPhotoReducer'
import cart from './cart/cartReducer'

const rootReducer = combineReducers({
    listPhotos,
    randomPhoto,
    cart
})

export default rootReducer