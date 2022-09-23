import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home/home.jsx";
import {AdvertsPage} from "../pages/advertsPage";
import {PostAdvert} from "../pages/postAdvert";
import AdvertProfile from "../pages/advertProfile/AdvertProfile.jsx";
import {PayboxTest} from "../pages/payboxTest";
import CategoryTemplate from "./categoryTemplate/categoryTemplate";
import AnimalsCategoriesPage from "../pages/categoriesPage/animals/AnimalsCategoriesPage.jsx";

export const Router = () => {
    const data = [
        {
            title: "Помощь бездомным животным!",
            description:"Мы не можем помочь всем. Но мы можем спасти намного больше, чем те, кто даже не пытался.",
            preview__img:"https://imgs.search.brave.com/nlKF3HvbX1vM6SWaiRHasyn7eW6dl6n4wn16v9WKKH4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/S1lKMEVCbE4xaUEx/cnZ0M3ZCbXp3SGFF/SyZwaWQ9QXBp",
            about__us__title:"Благотворительный фонд помощи бездомным животным реализует различные программы помощи животным.",
            about__us__description:"У фонда есть два собственных приюта, в которых проживает около 800 животных.",
            first__img:"https://imgs.search.brave.com/7GzN7omJBisvfliysWV1eUvYAewiRWYXCsLfLa_cyXc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/S0dPN3Zza1p3Y2Ez/WTlSdXpZR01BSGFF/OCZwaWQ9QXBp",
            second__img:"https://imgs.search.brave.com/uAP58oo_D-btuOpI_VTqFUUusp1PlOphqUJuSpDM2kM/rs:fit:662:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/WTFoYldFUHV2bUJD/eThrZll1di1RSGFG/VCZwaWQ9QXBp",
            third__img:"https://imgs.search.brave.com/6sNwZuvC_IlYOC2LY7SCv95YKV2X6rBuYNgUCDrdrnQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/N1FlVnBkTEpqUmJH/a3lCWDFVbXZ3SGFF/SyZwaWQ9QXBp",
            about__us__text:"Приют открыт для посещения каждую неделю с четверга по воскресенье: с 11:00 до 17:00 Если вы едете впервые, лучше попасть на экскурсию — они проводятся в 12:00 и в 14:00 Предварительная запись не требуется.",
            categories__adverts:[]
        },
        {
            title: "Помощь пожилым",
            description:"Мы не можем помочь всем. Но мы можем спасти намного больше, чем те, кто даже не пытался.",
            preview__img:"https://starikam.org/wp-content/themes/starikam/images/left_column_background.jpg ",
            about__us__title:"Как живется в глубинке? Молодым и то трудно, а уж пожилому, тем более старому человеку… Пенсия у большинства – минимальная, отопление у многих печное, у кого-то и канализации нет, до аптеки на автобусе в райцентр… Чего ни хватишься – ничего нет, особенно сил и здоровья.",
            about__us__description:"Аскетические условия при малейшем происшествии превращаются в экстремальные.",
            first__img:"https://starikam.org/wp-content/uploads/2022/04/B85A06321.jpg",
            second__img:"https://starikam.org/wp-content/uploads/2022/04/wood_food_final-%D1%81%D0%B0%D0%B9%D1%82.jpg  ",
            third__img:"https://starikam.org/wp-content/uploads/2022/04/%D0%A2%D0%B0%D1%80%D0%B0%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2-%D0%98%D0%B2%D0%B0%D0%BD-%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87-%D1%81%D0%B0%D0%B9%D1%82.jpg ",
            about__us__text:"Давайте же накормим и обогреем! Мы открываем проект «Неотложка». Для тех, кто может прийти в столовую, - горячие обеды. Где нет столовой или для тех, кто не может туда дойти, – соцработники принесут продуктовые наборы домой, несколько раз в неделю готовое горячее питание. Дрова привезут тем, кто носит дома валенки и куртку, вздыхает, видя гниль на отсыревших стенах, но лишнего полена в печь позволить себе не может.",
            categories__adverts:[]
        },
        {
            title: "Помощь природе",
            description:"Природу не поставишь “на паузу”. Природоохранная работа — это сложный, непрерывный и очень долгий процесс. Его нельзя останавливать, чтобы не “откатиться” на несколько десятилетий назад. Здоровая экосистема — это залог нашего существования, и сохранять природу жизненно важно для нас и будущих поколений.",
            preview__img:"https://musorniy.ru/wp-content/uploads/2019/02/1-11.jpg",
            about__us__title:"Загрязнение окружающей среды — это ущерб, наносимый природе, среде обитания вредными веществами, выбросами, отходами.",
            about__us__description:"Ежегодно в мире накапливается от 1 до 1,5 млрд производственного мусора и около полумиллиона отходов бытового происхождения. Количество коммунальных отходов увеличивается на 3% каждый год.",
            first__img:"https://imgs.search.brave.com/V9ftPwHrqDgl5EJeDAWL_BeF1tngHhAP6IcsuDi2_sU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/dklXTnhHTWwwTHpG/bjVqdmtzRGJnSGFF/OCZwaWQ9QXBp",
            second__img:"https://imgs.search.brave.com/ZIG6XaC03IHBUNIaNW8C5fg3AKfDdw_Ov6W5wrO_T_g/rs:fit:1024:768:1/g:ce/aHR0cDovL2hxLXdh/bGxwYXBlcnMucnUv/d2FsbHBhcGVycy81/L2hxLXdhbGxwYXBl/cnNfcnVfbmF0dXJl/XzI0MTMyXzEwMjR4/NzY4LmpwZw",
            third__img:"https://imgs.search.brave.com/jJM1jPP2KOeo0RbwiRCqeZKubwYYS32kRkyDhrQl8FI/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/Q3Q1TjkyQU10SnIy/OEJSWVlkbFhRSGFE/NCZwaWQ9QXBp",
            about__us__text:"Основная проблема механического фактора загрязнения окружающей среды заключается в его масштабах. Города и сельскохозяйственные угодья завалены мусором, жидкими стоками, аэрозолями. Засоряется околокосмическое пространство, в котором насчитывают более 3000 тонн космических отходов.",
            categories__adverts:[]
        }
    ]
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/adverts" element={<AdvertsPage/>}/>
      <Route path="/post-advert" element={<PostAdvert/>}/>
      <Route path="/advert-profile" element={<AdvertProfile/>}/>
      <Route path="/paybox" element={<PayboxTest/>}/>
      <Route path="/fund" element={<CategoryTemplate/>}/>
      <Route path="/animals" element={<AnimalsCategoriesPage data={data[0]}/>}/>
      <Route path="/elderly" element={<AnimalsCategoriesPage data={data[1]}/>}/>
      <Route path="/nature" element={<AnimalsCategoriesPage data={data[2]}/>}/>
    </Routes>
  );
};

