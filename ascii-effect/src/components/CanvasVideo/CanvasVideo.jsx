import { useEffect, useRef } from "react";
import s from "./CanvasVideo.module.scss";
import BgVideo from "../BgVideo/BgVideo";

const CanvasVideo = ({ srcUrl }) => {

    const r_Canvas = useRef(null);
    const r_Video = useRef(null);

    const drawVideoOnCanvas = () => {
        if (!r_Canvas.current || !r_Video.current) return;

        const c = r_Canvas.current;

        const v = r_Video.current;
        const { videoWidth, videoHeight } = v;
        c.width = videoWidth;
        c.height = videoHeight;
        const ctx = c.getContext("2d");
        ctx.drawImage(v, 0, 0, c.width, c.height);
        requestAnimationFrame(drawVideoOnCanvas);
    };

    useEffect(() => {
        if (!r_Canvas.current) return;
        r_Canvas.current.width = window.innerWidth;
        r_Canvas.current.height = window.innerHeight;
        r_Canvas.current.style.width = r_Canvas.current.width + 'px';
        r_Canvas.current.style.height = r_Canvas.current.height + 'px';
        drawVideoOnCanvas();
    }, [r_Canvas]);

    return (
        <>
            <canvas ref={r_Canvas} className={s.canvasVideo}></canvas>
            <BgVideo srcUrl={srcUrl} ref={r_Video} />
        </>
    );
};

export default CanvasVideo;