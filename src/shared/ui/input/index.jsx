import React, {useState, forwardRef} from "react";
import cn from "classnames";
import css from "./styles.module.scss";

import {ReactComponent as UnvisibleIcon} from "src/assets/icons/eye-no.svg";



export const Input = forwardRef((props, ref) => {
    const {error, isPassword, className, ...restProps} = props;
    const {...formsProps} = restProps;

    const [isShowValue, setIsShowValue] = useState(!isPassword);
    const [text, setText] = useState(props.value);

    let type = props.type;
    if (isPassword)
        type = !isShowValue ? "password" : "text";

    const isError = Boolean(error);


    return (
        <div className={css.root}>
            <div className={css.inputWrap}>
                <input
                    className={cn(css.input, isError && css.errorBorder, className)}
                    ref={ref}
                    type={type}
                    placeholder={props.placeholder}
                    onKeyDown={(e) => {
                        if (e.key === "Backspace" || e.key === "Enter" || e.shiftKey || e.altKey
                            || e.ctrlKey || e.metaKey || e.key === "ArrowLeft" || e.key === "ArrowRight")
                            return;
                        if (props.mask) {
                            if (!props.mask.test(text + e.key)) {
                                e.preventDefault();
                            }
                        }
                    }}
                    onChange={(e) => {
                        setText(e.target.value);
                        formsProps.onChange?.(e);
                    }}
                    onBlur={formsProps.onBlur}
                    name={formsProps.name}
                    value={formsProps.value}
                />
                {
                    isPassword && (
                        <UnvisibleIcon
                            className={css.passwordIcon}
                            width={22}
                            height={21}

                            onMouseDown={() => setIsShowValue(true)}
                            onMouseUp={() => setIsShowValue(false)}
                            onMouseLeave={() => setIsShowValue(false)}

                            onTouchStart={() => setIsShowValue(true)}
                            onTouchMove={() => setIsShowValue(false)}
                        />
                    )
                }
            </div>
            <p className={css.errorLabel}>
                {props.error}
            </p>
        </div>
    );
});