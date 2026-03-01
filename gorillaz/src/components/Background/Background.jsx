import s from "./Background.module.scss";

const Background= ({ref}) => {

    return (
        <img ref={ref} className={s.background} src="/assets/the-mountain-large_bg.png" alt="" />
    );
};

export default Background;