import s from "./BgVideo.module.scss";

const BgVideo = ({srcUrl}) => {

    return (
        <video src={srcUrl} className={s.video} loop autoPlay muted>
        </video>
    );
};

export default BgVideo;