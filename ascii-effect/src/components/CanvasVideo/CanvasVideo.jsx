import { useEffect, useRef } from "react";
import s from "./CanvasVideo.module.scss";
import BgVideo from "../BgVideo/BgVideo";
import VideoCanvas from "../../object/VideoCanvas";
import { useProps } from "../../store/propStore";
import asciiCanvas from "../../object/AsciiCanvas";

const CanvasVideo = ({ srcUrl }) => {

    const { params } = useProps();

    const r_CanvasV = useRef(null);
    const r_CanvasA = useRef(null);
    const r_Video = useRef(null);

    const videoCanvas = new VideoCanvas();

    const tick = () => {
        if (!r_CanvasV.current || !r_CanvasA.current || !r_Video.current) return;

        videoCanvas.update(r_Video.current);
        asciiCanvas.draw(videoCanvas, params);

        requestAnimationFrame(tick);
    }

    const onLoad = () => {
        videoCanvas.setup(r_CanvasV.current, r_Video.current);
        asciiCanvas.setup(r_CanvasA.current, params.cellSize, params.gap, videoCanvas);

        tick();
    }

    return (
        <div className={s.container} style={{ backgroundColor: params.bgColor }}>
            <canvas ref={r_CanvasV} className={s.canvasVideo}></canvas>
            <BgVideo onLoad={onLoad} srcUrl={srcUrl} ref={r_Video} />
            <canvas ref={r_CanvasA} className={s.canvasAscii} style={{ backdropFilter: `blur(${params.bgBlur}px)` }}></canvas>
        </div>
    );
};

export default CanvasVideo;