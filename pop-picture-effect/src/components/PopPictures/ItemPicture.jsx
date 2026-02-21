import { useGSAP } from "@gsap/react";
import s from "./PopPictures.module.scss";
import gsap from "gsap";
import { useRef } from "react";

const ItemPictures = ({ id, x, y, picture, onComplete}) => {

    const item_Ref = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(item_Ref.current, {
            scale: 0,
            transform: "translate(0, 25%)",
            duration: 0.2,
            // transform : "translate(-50%, -50%)",
            ease: "power3.out"
        })
        tl.to(item_Ref.current, {
            scale: 0,
            opacity: 0,
            delay: 1.5,
            duration: 0.3,
            ease: "power3.out",
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
        <img src={picture} ref={item_Ref} className={s.ItemPicture} style={style} alt="" />
    );
};

export default ItemPictures;