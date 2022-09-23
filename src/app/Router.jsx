import {Route, Routes} from "react-router-dom";
import {Home} from "src/pages/home/home";
import {AdvertsPage} from "src/pages/advertsPage";
import {PostAdvert} from "src/pages/postAdvert";
import AdvertProfile from "../pages/advertProfile/AdvertProfile.jsx";
import {PayboxTest} from "src/pages/payboxTest";
import CategoryTemplate from "./categoryTemplate/categoryTemplate";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/adverts" element={<AdvertsPage/>}/>
      <Route path="/post-advert" element={<PostAdvert/>}/>
      <Route path="/advert-profile" element={<AdvertProfile/>}/>
      <Route path="/paybox" element={<PayboxTest/>}/>
      <Route path="/fund" element={<CategoryTemplate/>}/>
    </Routes>
  );
};

