import { use, useEffect, useRef } from "react";
import { useProps } from "../../store/propStore";
import s from "./BgVideo.module.scss";

const BgVideo = ({ srcUrl, ref, onLoad }) => {

    const { params } = useProps();

    return (
        <video
            ref={ref}
            onCanPlay={onLoad}
            src={srcUrl}
            className={s.video}
            loop
            autoPlay
            muted
            style={{ opacity: params.showVideo ? "1" : "0" }}>
        </video>
    );
};

export default BgVideo;