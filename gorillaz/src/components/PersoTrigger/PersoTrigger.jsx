import s from "./PersoTrigger.module.scss";

const PersoTrigger = ({ setSomeHovered }) => {

    return (
        <div className={s.container}>
            <div
                className={`${s.persoTrigger} ${s.twoD}`}
                onMouseEnter={() => setSomeHovered(true)}
                onMouseLeave={() => setSomeHovered(false)}
            ></div>
            <div
                className={`${s.persoTrigger} ${s.russel}`}
                onMouseEnter={() => setSomeHovered(true)}
                onMouseLeave={() => setSomeHovered(false)}
            ></div>
            <div
                className={`${s.persoTrigger} ${s.noodle}`}
                onMouseEnter={() => setSomeHovered(true)}
                onMouseLeave={() => setSomeHovered(false)}
            ></div>
            <div
                className={`${s.persoTrigger} ${s.murdok}`}
                onMouseEnter={() => setSomeHovered(true)}
                onMouseLeave={() => setSomeHovered(false)}
            ></div>
        </div>
    );
};

export default PersoTrigger;