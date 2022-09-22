import {Route, Routes} from "react-router-dom";


import {Home} from "src/pages/home/home";
import {Adverts} from "src/pages/adverts/adverts";




export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adverts" element={<Adverts/>}/>
        </Routes>
    );
};

