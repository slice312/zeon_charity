import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {commonApi} from "src/store/commonApi";
import {advertApi} from "src/store/advertApi";


const rootReducer = combineReducers({
    [commonApi.reducerPath]: commonApi.reducer,
    [advertApi.reducerPath]: advertApi.reducer
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat([
            commonApi.middleware,
            advertApi.middleware
        ])
});
