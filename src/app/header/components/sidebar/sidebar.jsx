import {Link} from "react-router-dom";
import './sidebar.scss'
import logoIcon from "../../../../assets/icons/logo.svg";
import closeIcon from "../../../../assets/icons/close.svg";
import {useTranslation} from "react-i18next";

const Sidebar = ({isSidebarOpened, toggleSidebar}) => {
  const {t} = useTranslation()

  const onRedirectToPage = () => {
    toggleSidebar()
  }

  return (
    <div className={'sidebar' + (isSidebarOpened ? ' sidebar-js--open' : '')}>
      <div className="sidebar__inner">
        <button className="sidebar__close-btn" onClick={toggleSidebar}>
          <img src={closeIcon} alt="X"/>
        </button>
        <div className="header__logo-block sidebar__logo-block" onClick={onRedirectToPage}>
          <Link to={'/'}>
            <img src={logoIcon} alt="Logotype" className="header__logo"/>
          </Link>
        </div>
        <nav className="sidebar__nav">
          <ul className="sidebar__menu-list">
            <li className="header__menu-item" onClick={onRedirectToPage}>
              <Link to={'/contacts'}>{t("contacts")}</Link>
            </li>
          </ul>
        </nav>
        <button type={"button"} className="header__buttons-item header__buttons-item--give-help sidebar__btn">
          {
            t('donate')
          }
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
