import css from "./styles.module.scss";


export const CardsContainer = ({children}) => {
    return (
        <div className={css.root}>
            {children}
        </div>
    );
};