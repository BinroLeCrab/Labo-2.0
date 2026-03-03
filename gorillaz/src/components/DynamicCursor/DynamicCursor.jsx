import { use, useEffect, useRef, useState } from "react";
import s from "./DynamicCursor.module.scss";
import { useCursor } from "../../store/cursorStore";
import Background from "../Background/Background";
import c_Perso from "../../constant/Perso";

const DynamicCursor = () => {

    const cursor_ref = useRef(null);

    const { hovered } = useCursor();

    // const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        cursor_ref.current.style.left = `${e.clientX}px`;
        cursor_ref.current.style.top = `${e.clientY}px`;
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // useEffect(() => {
    //     if (hovered === "btn" || hovered === null) {
    //         setStyle({});
    //     } else {
    //         setStyle({
    //             Background: c_Perso[hovered].color,
    //         });
    //     }
    // }, [hovered]);


    return (
        <div
            ref={cursor_ref}
            className={`${s.cursor} ${hovered === "btn" ? s.hovered : hovered === null ? "" : s.persoHovered}`}
            style={{ background: `${hovered && hovered !== "btn" ? c_Perso[hovered].color : "white"}` }}
        >
            {hovered && hovered !== "btn" && 
                <p>{c_Perso[hovered].name}</p>
            }
        </div>
    );
};

export default DynamicCursor;