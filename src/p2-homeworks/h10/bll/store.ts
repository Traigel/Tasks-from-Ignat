import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";

export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    loading: loadingReducer,

})

export const store = legacy_createStore(reducers)

// @ts-ignore
window.store = store // for dev
