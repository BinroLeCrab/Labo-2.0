import { useRef, useState } from "react";
import s from "./PopPictures.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ItemPictures from "./ItemPicture";

const PopPictures = ({ children }) => {

    const area_Ref = useRef();
    const draw = useRef(false);
    const coordinates = useRef({ x: 0, y: 0 });
    const previousCoordinates = useRef({ x: 0, y: 0 });
    const timer = useRef(0);
    const [s_pictures, setSPictures] = useState([]);

    const loop = (time, deltaTime, frame) => {
        timer.current += deltaTime * 0.001;

        if (timer.current < 0.1 || !draw.current) return;
        timer.current = 0;

        if (coordinates.current.x !== previousCoordinates.current.x || coordinates.current.y !== previousCoordinates.current.y) {
            console.log(coordinates.current);
            const newPicture = {
                id: Date.now() + coordinates.current.x + coordinates.current.y,
                x: coordinates.current.x,
                y: coordinates.current.y
            };
            setSPictures(prev => [...prev, newPicture]);
            previousCoordinates.current = { ...coordinates.current };
        }
    };

    useGSAP(() => {
        gsap.ticker.add(loop);
        return () => {
            gsap.ticker.remove(loop);
        };
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top } = area_Ref.current.getBoundingClientRect();
        const x = (clientX - left) < 0 ? 0 : clientX - left;
        const y = (clientY - top) < 0 ? 0 : clientY - top;
        previousCoordinates.current = { ...coordinates.current };
        coordinates.current = { x, y };
    };

    const removePicture = (id) => {
        setSPictures(prev => prev.filter(picture => picture.id !== id));
    }

    return (
        <div
            ref={area_Ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => draw.current = true}
            onMouseLeave={() => draw.current = false}
            className={s.PopPictures}
        >
            {s_pictures.map((picture) => (
                <ItemPictures key={picture.id} id={picture.id} x={picture.x} y={picture.y} onComplete={removePicture} />
            ))}
            {children}
        </div>
    );
};

export default PopPictures;