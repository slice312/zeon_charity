import React from 'react'
import donationIcon from "../../../../assets/icons/contacts-donation.svg"
import partnerhsipIcon from "../../../../assets/icons/contact-partnerships.svg"
import pressIcon from "../../../../assets/icons/contacts-press.svg"
import './contactEmailLinks.scss'
import {useTranslation} from "react-i18next";

const ContactEmailLinks = () => {
  const {t} = useTranslation()


  return (
    <div className={'contacts-email'}>
      <ul className="contacts-email__list">
        <li className="contacts-email__item">
          <a href="mailto:onations@help.com" className="contacts-email__link">
            <img src={donationIcon} alt="dollar" className="contacts-email__img"/>
            <h4 className="contacts-email__title">
              {
                t('donations')
              }
            </h4>
            <p className="contacts-email__text contacts__text">
              {
                t('contacts_donations_description')
              }
            </p>
            <div className="contacts-email__source-block">
              <span className="contacts-email__source">donations@help.com</span>
              <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807612 19.9792 0.807612 19.3934 1.3934C18.8076 1.97918 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM0 13.5H30V10.5H0V13.5Z"
                  fill="black"/>
              </svg>
            </div>
          </a>
        </li>
        <li className="contacts-email__item">
          <a href="mailto:partnerships@help.com" className="contacts-email__link">
            <img src={partnerhsipIcon} alt="dollar" className="contacts-email__img"/>
            <h4 className="contacts-email__title">
              {t('partnerships')}
            </h4>
            <p className="contacts-email__text contacts__text">
              {
                t('contacts_partnerships_description')
              }
            </p>
            <div className="contacts-email__source-block">
              <span className="contacts-email__source">partnerships@help.com</span>
              <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807612 19.9792 0.807612 19.3934 1.3934C18.8076 1.97918 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM0 13.5H30V10.5H0V13.5Z"
                  fill="black"/>
              </svg>
            </div>
          </a>
        </li>
        <li className="contacts-email__item">
          <a href="mailto:press@help.com" className="contacts-email__link">
            <img src={pressIcon} alt="dollar" className="contacts-email__img"/>
            <h4 className="contacts-email__title">
              {
                t('suggestion')
              }
            </h4>
            <p className="contacts-email__text contacts__text">
              {
                t('contacts_suggestion_description')
              }
            </p>
            <div className="contacts-email__source-block">
              <span className="contacts-email__source">press@help.com</span>
              <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807612 19.9792 0.807612 19.3934 1.3934C18.8076 1.97918 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM0 13.5H30V10.5H0V13.5Z"
                  fill="black"/>
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactEmailLinks
