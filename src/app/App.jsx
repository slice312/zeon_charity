import {Router} from "./Router.jsx"
import "./styles/index.scss";
import Header from "./header/header";
import {useEffect} from "react";


export const App = () => {
    console.log("APP", import.meta.env.VITE_WEB_API_URL);

    return (
        <div className="App">
          <Header/>
            <Router/>
        </div>
    );
};

