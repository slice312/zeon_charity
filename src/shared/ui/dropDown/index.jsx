import React, {useState, useEffect, useRef} from "react";
import cn from "classnames";

import {useOutsideAlerter} from "src/shared/hooks/ui-hooks";
import css from "./styles.module.scss";

import arrowIcon from "src/assets/icons/arrow-down.svg";



export const DropDown = (props) => {
    const {items, onSelectedItem, ItemComponent, id, options} = props;

    const [isShowList, setIsShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setSelectedItem(items && items[0]);
    }, [items]);

    useEffect(() => {
        onSelectedItem(selectedItem);
    }, [selectedItem]);


    const preventRef = useRef(false);
    const dropListRef = useRef(null);
    useOutsideAlerter(dropListRef, () => {
        preventRef.current = true;
        setIsShowList(false);
    });


    return (
        <div className={cn(css.selectCategories, options?.className)} id={id}>
            <button
                className={cn(css.trigger, options?.triggerClassName)}
                onClick={() => {
                    if (!preventRef.current)
                        setIsShowList(prev => !prev);
                    preventRef.current = false;
                }}
                type="button"
            >
                {selectedItem && <ItemComponent {...selectedItem}/>}
                <img
                    src={arrowIcon}
                    alt="arrow"
                    style={{
                        transform: isShowList ? "rotate(0deg)" : "rotate(180deg)",
                        transition: "0.2s"
                    }}
                />
            </button>
            {
                isShowList && (
                    <ul ref={dropListRef} className={cn(css.list, options?.listClassName)}>
                        {
                            items.map((item, i) => (
                                <li
                                    key={i}
                                    className={css.itemWrap}
                                    onClick={() => {
                                        setSelectedItem(item);
                                        setIsShowList(false);
                                    }}
                                >
                                    {item && <ItemComponent {...item}/>}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
};