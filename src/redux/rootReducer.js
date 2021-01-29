import {combineReducers} from "redux";
import listPhotos from './listOfPhotos/listPhotosReducer'
import randomPhoto from './randomPhotos/randomPhotoReducer'

const rootReducer = combineReducers({
    listPhotos,
    randomPhoto
})

export default rootReducer