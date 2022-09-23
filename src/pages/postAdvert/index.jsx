import cn from "classnames";
import {DropDown} from "src/shared/ui/dropDown";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useState} from "react";
import css from "./styles.module.scss"
import {commonApi} from "src/store/commonApi.js";


const categories = [
    {id: 1, name: "Kek"},
    {id: 2, name: "Lol"},
];


const initValues = {
    name: "ds"
};

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Это поле обязательно"),
});


export const PostAdvert = () => {
    const [isValidateOnChange, setIsValidateOnChange] = useState(false);

    const {data: cities, isLoading} = commonApi.useGetCitiesQuery();
    console.log("CITITES", cities, isLoading);


    const formik = useFormik({
        enableReinitialize: false,
        initialValues: initValues,
        validationSchema: validationSchema,
        validateOnBlur: false,
        validateOnChange: isValidateOnChange,
        validate: () => {
            setIsValidateOnChange(true);
        },
        onSubmit: (values) => {
            console.log("lel");
        }
    });


    return (
        <div className={css.root}>
            <div className="container">
                <form className={css.form} onSubmit={formik.handleSubmit} noValidate>
                    <DropDown
                        id="subcategory-selector"
                        items={categories || []}
                        onSelectedItem={x => formik.setFieldValue("categoryId", x?.id)}
                        ItemComponent={CategoryItem}
                    />
                    PsotAdver
                </form>
            </div>
        </div>
    );
};

export const CategoryItem = ({id, name}) => {
    return (
        <div className={css.subCategoryItem}>
            <p className={css.subTitle}>
                {name}
            </p>
        </div>
    );
};