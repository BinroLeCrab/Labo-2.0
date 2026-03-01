import { useRef } from "react";
import s from "./DynamicCursor.module.scss";

const DynamicCursor = ({ hovered }) => {

    const cursor_ref = useRef(null);

    const handleMouseMove = (e) => {
        cursor_ref.current.style.left = `${e.clientX}px`;
        cursor_ref.current.style.top = `${e.clientY}px`;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return (
        <div ref={cursor_ref} className={`${s.cursor} ${hovered ? s.hovered : ''}`}>
        </div>
    );
};

export default DynamicCursor;