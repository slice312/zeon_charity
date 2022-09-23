import cn from "classnames";
import {DropDown} from "src/shared/ui/dropDown";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useState} from "react";
import css from "./styles.module.scss"
import {commonApi} from "src/store/commonApi.js";
import {Input} from "../../shared/ui/input/index.jsx";
import {TextArea} from "../../shared/ui/textArea";


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
        initialValues: {
            categoryId: -1,
            city: -1,
            title: "",
            description: "",
            progress: 0,
            charityQty: 0,
            owner: "",
            phone_number: "",
            creation_date: "",
            end_date: "",
            requisites: "",
            is_active: false,
        },
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

                    <Input
                        className={css.input}
                        id="product-name"
                        placeholder="Название"
                        {...formik.getFieldProps("title")}
                        error={formik.errors.title}
                    />
                    <TextArea
                        id="product-name"
                        className={cn(css.textarea, css.input)}
                        placeholder="Описание"
                        {...formik.getFieldProps("description")}
                        error={formik.errors.description}
                    />
                    <Input
                        className={css.input}
                        id="product-name"
                        placeholder="Название"
                        {...formik.getFieldProps("phone_number")}
                        error={formik.errors.phone_number}
                    />
                    <Input
                        className={css.input}
                        id="product-name"
                        placeholder="Название"
                        {...formik.getFieldProps("end_date")}
                        error={formik.errors.end_date}
                    />
                    <Input
                        className={css.input}
                        id="product-name"
                        placeholder="Название"
                        {...formik.getFieldProps("requisites")}
                        error={formik.errors.requisites}
                    />
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