import "./header.scss"
import logoIcon from "../../assets/icons/logo.svg"
import {Link} from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import {useState} from "react";

const Header = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpened(prev => !prev)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo-block">
            <Link to={'/'}>
              <img src={logoIcon} alt="Logotype" className="header__logo"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <Link to={'/fund'}>Фонд</Link>
              </li>
              <li className="header__menu-item">
                <Link to={'/statistics'}>Статистка</Link>
              </li>
              <li className="header__menu-item">
                <Link to={'/contacts'}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="header__buttons">
            <button className="header__burger" onClick={toggleSidebar}>
              <div className="header__burger-item"/>
              <div className="header__burger-item"/>
            </button>
            <button type={"button"} className="header__buttons-item header__buttons-item--give-help">
              Пожертвовать
            </button>
            <button type={"button"} className="header__buttons-item header__buttons-item--language">
              RU
            </button>
          </div>
        <Sidebar isSidebarOpened={isSidebarOpened} toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
