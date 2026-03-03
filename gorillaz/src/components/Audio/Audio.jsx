import { useCursor } from "../../store/cursorStore";
import s from "./Audio.module.scss";

const Audio= () => {

    const { updateHovered } = useCursor();

    return (
        <p className={s.audio} onMouseEnter={() => updateHovered("btn")} onMouseLeave={() => updateHovered(null)}>coucou</p>
    );
};

export default Audio;