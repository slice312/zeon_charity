import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {App} from './app/App.jsx';
import "./i18n";
import {Provider} from "react-redux";
import {store} from "./store";
import dayjs from "dayjs";
import customParseFormat  from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);


ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
