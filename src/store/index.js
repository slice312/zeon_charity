import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {commonApi} from "src/store/commonApi";


const rootReducer = combineReducers({
    [commonApi.reducerPath]: commonApi.reducer
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat([
            commonApi.middleware
        ])
});
