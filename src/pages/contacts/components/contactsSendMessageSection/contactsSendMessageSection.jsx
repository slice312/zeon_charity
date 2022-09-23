import ContactsForm from "../contactsForm/contactsForm";
import "./contactsSendMessageSection.scss"
import image from "../../../../assets/icons/contacts.svg"
import {useTranslation} from "react-i18next";

const ContactsSendMessageSection = () => {
  const {t} = useTranslation()

  return (
    <div className="send-message">
      <div className="text-content">
        <h2 className="send-message__title">
          {
            t('send_message_title')
          }
        </h2>
        <p className="send-message__text contacts__text">
          {
            t('send_message_text')
          }
        </p>
        <div className="send-message__img-block">
          <img src={image} alt="" className="send-message__img"/>
        </div>
      </div>

      <ContactsForm/>
    </div>
  );
};

export default ContactsSendMessageSection;
