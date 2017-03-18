import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import modalReducer from '../reducers/ModalReducer'

export default createStore(
    combineReducers({
        modal: modalReducer,
    }),
    applyMiddleware(thunk)
)
