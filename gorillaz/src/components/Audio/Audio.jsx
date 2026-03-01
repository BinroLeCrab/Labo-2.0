import s from "./Audio.module.scss";

const Audio= ({setSomeHovered}) => {

    return (
        <p className={s.audio} onMouseEnter={() => setSomeHovered(true)} onMouseLeave={() => setSomeHovered(false)}>coucou</p>
    );
};

export default Audio;