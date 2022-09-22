import {Route, Routes} from "react-router-dom";
import {Home} from "src/pages/home/home";
import {AdvertsPage} from "src/pages/advertsPage";
import AdvertProfile from "../pages/advertProfile/AdvertProfile.jsx";
import {PayboxTest} from "src/pages/payboxTest";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adverts" element={<AdvertsPage/>}/>
            <Route path="/advert-profile" element={<AdvertProfile/>}/>
            <Route path="/paybox" element={<PayboxTest/>}/>
        </Routes>
    );
};

