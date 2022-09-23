import './contactsForm.scss'
import {Form, Formik} from "formik"
import MyField from "../myField/myField"
import * as Yup from "yup";
import {useTranslation} from "react-i18next";

const ContactsForm = () => {
  const inputs = [
    {name: "name", type: "text", placeholder: "name"},
    {name: "subject", type: "text", placeholder: "ex.Donation"},
    {name: "email", type: "email", placeholder: "example@email.com"},
    {name: "phone", type: "number", placeholder: "(123) 465 - 789"},
    {name: "message", type: "text", placeholder: "Please type your message here", className: 'message__textarea'},
  ]

  const {t} = useTranslation()

  return (
    <div className='contacts-form__wrapper'>
      <Formik initialValues={{
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      }} onSubmit={() => console.log('send')}
              validationSchema={
                Yup.object({
                  name: Yup.string()
                    .required('*Обязательное поле!'),
                  phone_number: Yup.string()
                    .min(3, '*Минимальное количество символов 3!')
                    .required('*Обязательно!'),
                  email: Yup.string()
                    .email('*Неправильный email адрес')
                    .required('*Обязательное поле!'),
                  message: Yup.string()
                    .min(5, '*Минимальное количество символов 5!')
                    .required('*Обязательное поле!'),
                })}>
        <Form className={'contacts-form'}>
          {
            inputs.map(item => (
              <MyField key={item.name} name={item.name} type={item.type} placeholder={item.placeholder}
                       className={item?.className}/>
            ))
          }
          <button type="submit" className="contacts-form__submit-btn">
            {
              t('send')
            }
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactsForm
