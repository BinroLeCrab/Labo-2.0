import { useEffect, useState, useRef } from "react";
import "./ControlsPanel.scss";
import { useProps } from "../../store/propStore";
import { Pane } from 'tweakpane';
import asciiCanvas from "../../object/AsciiCanvas";

const ControlsPanel = () => {

    const { params, setMinBrightness, setMaxBrightness, setCellSize, setGap, setColor } = useProps();
    const paneRef = useRef(null);

    const [show, setShow] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === "c") {
            setShow(prev => !prev);
        }
    }

    useEffect(() => {
        const pane = document.querySelector(".tp-dfwv");
        if (!pane) return;

        if (show) {
            pane.style.display = "block";
        } else {
            pane.style.display = "none";
        }
    }, [show]);

    useEffect(() => {
        // Crée la Pane une seule fois
        if (!paneRef.current) {
            paneRef.current = new Pane();
        }

        const pane = paneRef.current;
        const folder = pane.addFolder({ title: "Parameters" });

        folder.addBinding(params, "minBrightness", { min: 0, max: 1, step: 0.1 });
        folder.addBinding(params, "maxBrightness", { min: 0, max: 1, step: 0.1 });
        folder.addBinding(params, "cellSize", { min: 1, max: 50, step: 1 }).on("change", (ev) => {
            asciiCanvas.createGrid(ev.value, params.gap);
        });
        folder.addBinding(params, "gap", { min: 0, max: 50, step: 1 }).on("change", (ev) => {
            asciiCanvas.createGrid(params.cellSize, ev.value);
        });
        folder.addBinding(params, "color", { view: "color", picker: "inline", expanded: true });
        folder.addBinding(params, "asciiMode", { options: { default:"default", classic: "classic", numeric: "numeric", symbol: "symbol", letters: "letters", bichrome: "bichrome" } });
        folder.addBinding(params, "asciiContrast", { view: "checkbox" });
        folder.addBinding(params, "medianBrightness", { min: 0, max: 10, step: 1 });
        const paneDOM = document.querySelector(".tp-dfwv");

        if (show) {
            paneDOM.style.display = "block";
        } else {
            paneDOM.style.display = "none";
        }

        window.addEventListener("keydown", handleKeyDown);

        // Nettoyage
        return () => {
            pane.dispose();
            paneRef.current = null;
            window.removeEventListener("keydown", handleKeyDown)
        };
    }, []);

    return (
        <>
            {!show && <div className="toggle-info">Press "c" to customize</div>}
        </>
    )
}

export default ControlsPanel;