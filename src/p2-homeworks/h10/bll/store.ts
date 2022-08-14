import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themeReducer

})

export const store = legacy_createStore(reducers)

// @ts-ignore
window.store = store // for dev
