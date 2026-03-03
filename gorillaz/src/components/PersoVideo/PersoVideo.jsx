import { useCursor } from "../../store/cursorStore";
import s from "./PersoVideo.module.scss";

const PersoVideo = () => {

    const { hovered } = useCursor();

    return (
        <>
            <video
                src="/assets/videos/murdoc.mp4"
                className={s.video}
                autoPlay
                loop
                muted
                style={{ zIndex: `${hovered === "murdoc" ? 2 : -1}` }}
            >
            </video>
            <video
                src="/assets/videos/noodle.mp4"
                className={s.video}
                autoPlay
                loop
                muted
                style={{ zIndex: `${hovered === "noodle" ? 2 : -1}` }}
            >
            </video>
            <video
                src="/assets/videos/russel.mp4"
                className={s.video}
                autoPlay
                loop
                muted
                style={{ zIndex: `${hovered === "russel" ? 2 : -1}` }}
            >
            </video>
            <video
                src="/assets/videos/twoD.mp4"
                className={s.video}
                autoPlay
                loop
                muted
                style={{ zIndex: `${hovered === "twoD" ? 2 : -1}` }}
            >
            </video>
        </>
    );
};

export default PersoVideo;