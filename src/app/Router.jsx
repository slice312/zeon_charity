import {Route, Routes} from "react-router-dom";
import {Home} from "src/pages/home/home";
import {AdvertsPage} from "src/pages/advertsPage";
import AdvertProfile from "../pages/advertProfile/AdvertProfile.jsx";
import {PayboxTest} from "src/pages/payboxTest";
import CategoryTemplate from "./categoryTemplate/categoryTemplate";
import Contacts from "../pages/contacts/contacts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/adverts" element={<AdvertsPage/>}/>
      <Route path="/advert-profile" element={<AdvertProfile/>}/>
      <Route path="/paybox" element={<PayboxTest/>}/>
      <Route path="/fund" element={<CategoryTemplate/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
  );
};

