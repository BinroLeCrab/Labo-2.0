import s from "./Content.module.scss";

const Content = () => {

    return (
        <div className={s.content}>
            <h1 className="hidden">MOISTURIZER</h1>
            <img src="/assets/moist.png" alt="Moisturizer" className={s.moist} />
        </div>
    );
};

export default Content;