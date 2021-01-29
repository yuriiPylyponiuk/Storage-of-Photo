import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {applyMiddleware, compose} from 'redux'
import {createStore} from 'redux'
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";



const initialiseSagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    compose(applyMiddleware(initialiseSagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        
)

initialiseSagaMiddleware.run(rootSaga)

export {store}