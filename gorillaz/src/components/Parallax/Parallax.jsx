import Background from "../Background/Background";
import Foreground from "../Foreground/Foreground";
import s from "./Parallax.module.scss";

const Parallax = () => {

    return (
        <div className={s.parallax}>
            <Background />
            <Foreground />
        </div>
    );
};

export default Parallax;