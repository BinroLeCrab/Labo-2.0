import { useGSAP } from "@gsap/react";
import s from "./PopPictures.module.scss";
import gsap from "gsap";
import { useRef } from "react";

const ItemPictures = ({ id, x, y, onComplete}) => {

    const item_Ref = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(item_Ref.current, {
            scale: 0,
            duration: 0.2,
            // transform : "translate(-50%, -50%)",
            ease: "power2.out"
        })
        tl.to(item_Ref.current, {
            scale: 0,
            opacity: 0,
            delay: 1,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                onComplete(id);
            }
        });
    }, []);

    const style = {
        left: `${x}px`,
        top: `${y}px`
    };

    return (
        <div ref={item_Ref} className={s.ItemPicture} style={style}>
        </div>
    );
};

export default ItemPictures;