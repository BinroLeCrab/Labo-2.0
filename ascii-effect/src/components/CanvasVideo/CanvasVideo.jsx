import { useEffect, useRef } from "react";
import s from "./CanvasVideo.module.scss";
import BgVideo from "../BgVideo/BgVideo";
import videoCanvas from "../../object/VideoCanvas";

const CanvasVideo = ({ srcUrl }) => {

    const r_Canvas = useRef(null);
    const r_Video = useRef(null);

    // const drawVideoOnCanvas = () => {
    //     if (!r_Canvas.current || !r_Video.current) return;

    //     const c = r_Canvas.current;

    //     const v = r_Video.current;
    //     const { videoWidth, videoHeight } = v;
    //     c.width = videoWidth;
    //     c.height = videoHeight;
    //     const ctx = c.getContext("2d");
    //     ctx.drawImage(v, 0, 0, c.width, c.height);
    //     requestAnimationFrame(drawVideoOnCanvas);
    // };

    const tick = () => {
        if (!r_Canvas.current || !r_Video.current) return;

        videoCanvas.update(r_Video.current);

        requestAnimationFrame(tick);
    }
    useEffect(() => {
        if (!r_Canvas.current) return;

        videoCanvas.setup(r_Canvas.current);
        
        tick();
    }, [r_Canvas]);

    return (
        <>
            <canvas ref={r_Canvas} className={s.canvasVideo}></canvas>
            <BgVideo srcUrl={srcUrl} ref={r_Video} />
        </>
    );
};

export default CanvasVideo;