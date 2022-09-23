import React, {forwardRef, useState} from "react";
import cn from "classnames";
import css from "./styles.module.scss";


export const TextArea = forwardRef((props, ref) => {
    const {options, error, className, id, ...restProps} = props;
    const [restCharQty, setRestCharQty] = useState(options?.maxLength);
    const isError = Boolean(error);


    return (
        <div className={css.root}>
            <textarea
                className={cn(css.textarea, isError && css.errorBorder, className)}
                maxLength={options?.maxLength}
                id={id}
                ref={ref}
                placeholder={props.placeholder}
                {...restProps}
                onChange={(e) => {
                    restProps.onChange?.(e);
                    if (options?.maxLength)
                        setRestCharQty(options?.maxLength - e.target.value.length);
                }}
            >
            </textarea>
            {
                (isError) && (
                    <p className={css.errorLabel}>
                        {error}
                    </p>
                )
            }
            {
                (!isError && options?.showCharCounter) && (
                    <p className={css.countLabel}>
                        {restCharQty} знаков осталось
                    </p>
                )
            }
        </div>
    );
});