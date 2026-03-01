import s from "./Foreground.module.scss";

const Foreground= ({ref}) => {

    return (
        <img ref={ref} className={s.foreground} src="/assets/the-mountain-large-perso.png" alt="" />
    );
};

export default Foreground;