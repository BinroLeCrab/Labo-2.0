import { useCursor } from "../../store/cursorStore";
import s from "./PersoTrigger.module.scss";

const PersoTrigger = () => {

    const { updateHovered } = useCursor();

    return (
        <div className={s.container}>
            <div
                className={`${s.persoTrigger} ${s.twoD}`}
                onMouseEnter={() => updateHovered("twoD")}
                onMouseLeave={() => updateHovered(null)}
            ></div>
            <div
                className={`${s.persoTrigger} ${s.russel}`}
                onMouseEnter={() => updateHovered("russel")}
                onMouseLeave={() => updateHovered(null)}
            ></div>
            <div
                className={`${s.persoTrigger} ${s.noodle}`}
                onMouseEnter={() => updateHovered("noodle")}
                onMouseLeave={() => updateHovered(null)}
            ></div>
            <div
                className={`${s.persoTrigger} ${s.murdok}`}
                onMouseEnter={() => updateHovered("murdok")}
                onMouseLeave={() => updateHovered(null)}
            ></div>
        </div>
    );
};

export default PersoTrigger;