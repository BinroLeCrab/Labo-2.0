import { useEffect, useState, useRef } from "react";
import "./ControlsPanel.scss";
import { useProps } from "../../store/propStore";
import { Pane } from 'tweakpane';

const ControlsPanel = () => {

    const [show, setShow] = useState(true);

    const handleKeyDown = (e) => {
        if (e.key === "c") {
            setShow(prev => !prev);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            {show && <Panel />}
        </>
    );
};

const Panel = () => {

    const { params, setMinBrightness, setMaxBrightness, setCellSize, setGap, setColor } = useProps();
    const paneRef = useRef(null);

    useEffect(() => {
        // Crée la Pane une seule fois
        if (!paneRef.current) {
            paneRef.current = new Pane();
        }

        const pane = paneRef.current;
        const folder = pane.addFolder({ title: "Parameters" });
        
        // folder.addBinding(params, "minBrightness", { min: 0, max: 1, step: 0.01 }).on("change", (ev) => setMinBrightness(ev.value));
        // folder.addBinding(params, "maxBrightness", { min: 0, max: 1, step: 0.01 }).on("change", (ev) => setMaxBrightness(ev.value));
        // folder.addBinding(params, "cellSize", { min: 1, max: 30, step: 1 }).on("change", (ev) => setCellSize(ev.value));
        // folder.addBinding(params, "gap", { min: 0, max: 10, step: 1 }).on("change", (ev) => setGap(ev.value));
        // folder.addBinding(params, "color").on("change", (ev) => setColor(ev.value));
        folder.addBinding(params, "minBrightness", { min: 0, max: 1, step: 0.1 });
        folder.addBinding(params, "maxBrightness", { min: 0, max: 1, step: 0.1 });
        folder.addBinding(params, "cellSize", { min: 1, max: 30, step: 1 });
        folder.addBinding(params, "gap", { min: 0, max: 10, step: 1 });
        folder.addBinding(params, "color", { view: "color", picker: "inline", expanded: true });

        // Nettoyage
        return () => {
            pane.dispose();
            paneRef.current = null;
        };
    }, []);

    return <></>
}

export default ControlsPanel;