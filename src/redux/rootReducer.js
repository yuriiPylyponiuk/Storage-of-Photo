import {combineReducers} from "redux";
import listPhotos from './listOfPhotos/listPhotosReducer'
import randomPhoto from './randomPhotos/randomPhotoReducer'
import cart from './cart/cartReducer'
import photo from './photoitem/photoitemReducer'

const rootReducer = combineReducers({
    listPhotos,
    randomPhoto,
    cart,
    photo
})

export default rootReducer