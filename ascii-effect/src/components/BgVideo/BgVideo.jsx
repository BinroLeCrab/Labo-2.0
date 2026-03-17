import s from "./BgVideo.module.scss";

const BgVideo = ({srcUrl, ref, onLoad}) => {

    return (
        <video onCanPlay={onLoad} src={srcUrl} ref={ref} className={s.video} loop autoPlay muted>
        </video>
    );
};

export default BgVideo;