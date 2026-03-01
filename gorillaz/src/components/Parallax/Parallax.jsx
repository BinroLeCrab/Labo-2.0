import { useRef } from "react";
import Background from "../Background/Background";
import Foreground from "../Foreground/Foreground";
import s from "./Parallax.module.scss";

const Parallax = () => {

    const bgRef = useRef(null);
    const fgRef = useRef(null);
    const area_Ref = useRef(null);
    const maxBgTranslate = 25;
    const maxFgTranslate = 5;

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top } = area_Ref.current.getBoundingClientRect();
        const x = (clientX - left) < 0 ? 0 : clientX - left;
        const y = (clientY - top) < 0 ? 0 : clientY - top;
        
        const centerX = area_Ref.current.clientWidth / 2;
        const centerY = area_Ref.current.clientHeight / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;

        const bgX = (deltaX / centerX) * maxBgTranslate + centerX;
        const bgY = (deltaY / centerY) * maxBgTranslate + centerY;
        const fgX = (deltaX / centerX) * maxFgTranslate + centerX;
        const fgY = (deltaY / centerY) * maxFgTranslate;

        bgRef.current.style.top = `${bgY}px`;
        bgRef.current.style.left = `${bgX}px`;
        fgRef.current.style.bottom = `${fgY}px`;
        fgRef.current.style.left = `${fgX}px`;

    };

    window.addEventListener("mousemove", handleMouseMove);

    return (
        <div ref={area_Ref} className={s.parallax}>
            <Background ref={bgRef} />
            <Foreground ref={fgRef} />
        </div>
    );
};

export default Parallax;