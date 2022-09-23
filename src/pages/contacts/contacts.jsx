
import './contacts.scss'
import ContactEmailLinks from "./components/contactEmailLinks/contactEmailLinks";
import ContactsForm from "./components/contactsForm/contactsForm";
import ContactsSendMessageSection from "./components/contactsSendMessageSection/contactsSendMessageSection";
import {useTranslation} from "react-i18next";

const Contacts = () => {
  const {t} = useTranslation()

  return (
    <div className='contacts'>
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__preview-text-content">
            <p className="contacts__subtitle">
              {t('contact_us_subtitle')}
            </p>
            <h2 className="contacts__title">
              {t('get_in_touch_today')}
            </h2>
            <p className="contacts__text">
              {t('contacts_preview_text')}
            </p>
          </div>

          <ContactEmailLinks/>
          <ContactsSendMessageSection/>

        </div>
      </div>
    </div>
  );
};

export default Contacts;
