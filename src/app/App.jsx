import {Router} from "./Router.jsx"
import "./styles/index.scss";
import Header from "./header/header";
import {useEffect} from "react";

export const App = () => {
    console.log("APP", import.meta.env.VITE_WEB_API_URL);

    // useEffect(() => {
    //     fetch("https://netrunner.pythonanywhere.com/api/v1/cities/", {
    //         method: "GET"
    //     })
    //         .then(re => {
    //             re.json()
    //                 .then(data => {
    //                     console.log(data);
    //                     debugger
    //                 })
    //         })
    //         .catch(e => {
    //             console.log(e);
    //             debugger
    //         })
    // }, [])
    //

    return (
        <div className="App">
          <Header/>
            <Router/>
        </div>
    );
};

