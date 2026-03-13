import s from "./BgVideo.module.scss";

const BgVideo = ({srcUrl, ref}) => {

    return (
        <video src={srcUrl} ref={ref} className={s.video} loop autoPlay muted>
        </video>
    );
};

export default BgVideo;