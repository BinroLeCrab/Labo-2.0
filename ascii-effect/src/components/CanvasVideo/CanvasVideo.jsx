import { useEffect, useRef } from "react";
import s from "./CanvasVideo.module.scss";
import BgVideo from "../BgVideo/BgVideo";
import VideoCanvas from "../../object/VideoCanvas";
import AsciiCanvas from "../../object/AsciiCanvas";

const CanvasVideo = ({ srcUrl }) => {

    const r_CanvasV = useRef(null);
    const r_CanvasA = useRef(null);
    const r_Video = useRef(null);

    const videoCanvas = new VideoCanvas();
    const asciiCanvas = new AsciiCanvas();

    const minBrightness = 0.3;
    const maxBrightness = 0.8;
    const cellSize = 15;
    const gap = 0;

    const tick = () => {
        if (!r_CanvasV.current || !r_CanvasA.current || !r_Video.current) return;

        videoCanvas.update(r_Video.current);
        asciiCanvas.draw(videoCanvas, minBrightness, maxBrightness);

        requestAnimationFrame(tick);
    }

    const onLoad = () => {
        videoCanvas.setup(r_CanvasV.current, r_Video.current);
        asciiCanvas.setup(r_CanvasA.current, cellSize, gap, videoCanvas);

        tick();
    }

    return (
        <>
            <canvas ref={r_CanvasV} className={s.canvasVideo}></canvas>
            <BgVideo onLoad={onLoad} srcUrl={srcUrl} ref={r_Video} />
            <canvas ref={r_CanvasA} className={s.canvasAscii}></canvas>
        </>
    );
};

export default CanvasVideo;