import {ErrorMessage, Field} from "formik";
import "./myField.scss"
import {useTranslation} from "react-i18next";

const MyField = (
  {
    name,
    type,
    placeholder,
    className,
  }) => {

  const {t} = useTranslation()

  return (
    <div className={'message__field ' + className}>
      <label className={"message__label"}>
        <p className="message__title">{t(name)}</p>
        <ErrorMessage name={name} className={"message__error"} component="span"/>
        <Field type={type}
               name={name}
               className="message__input"
               placeholder={placeholder}/>
      </label>
    </div>
  )
}

export default MyField