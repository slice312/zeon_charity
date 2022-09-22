import {Route, Routes} from "react-router-dom";


import {Home} from "src/pages/home/home";
import {Adverts} from "src/pages/adverts/adverts";
import AdvertProfile from "../pages/advertProfile/AdvertProfile.jsx";




export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adverts" element={<Adverts/>}/>
            <Route path="/advert-profile" element={<AdvertProfile/>}/>
        </Routes>
    );
};

