import { useRef } from "react";
import s from "./DynamicCursor.module.scss";
import { useCursor } from "../../store/cursorStore";

const DynamicCursor = () => {

    const cursor_ref = useRef(null);

    const { hovered } = useCursor();

    const handleMouseMove = (e) => {
        cursor_ref.current.style.left = `${e.clientX}px`;
        cursor_ref.current.style.top = `${e.clientY}px`;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return (
        <div ref={cursor_ref} className={`${s.cursor} ${hovered === "btn" ? s.hovered : ''}`}>
        </div>
    );
};

export default DynamicCursor;