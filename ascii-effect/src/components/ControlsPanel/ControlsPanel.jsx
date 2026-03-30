import { useEffect, useState, useRef } from "react";
import "./ControlsPanel.scss";
import { useProps } from "../../store/propStore";
import { Pane } from 'tweakpane';
import asciiCanvas from "../../object/AsciiCanvas";

const ControlsPanel = () => {

    const { params, setShowVideo, setBackgroundColor, setBackgroundBlur } = useProps();
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
            paneRef.current = new Pane({ title: "Parameters" });
        }

        const pane = paneRef.current;
        const folderBasic = pane.addFolder({ title: "Basic" });

        folderBasic.addBinding(params, "invertBrightness", {
            label: 'Invert Brightness',
            view: "checkbox"
        });

        folderBasic.addBinding(params, "minBrightness", {
            label: 'Min Brightness',
            min: 0, max: 1, step: 0.1
        });
        folderBasic.addBinding(params, "maxBrightness", {
            label: 'Max Brightness',
            min: 0, max: 1, step: 0.1
        });
        folderBasic.addBinding(params, "medianBrightness", {
            label: 'Median Brightness',
            min: 0, max: 10, step: 1
        });
        folderBasic.addBinding(params, "cellSize", {
            label: 'Cell Size',
            min: 8, max: 50, step: 1
        }).on("change", (ev) => {
            asciiCanvas.createGrid(ev.value, params.gap);
        });
        folderBasic.addBinding(params, "gap", {
            label: 'Cell Gap',
            min: 0, max: 50, step: 1
        }).on("change", (ev) => {
            asciiCanvas.createGrid(params.cellSize, ev.value);
        });
        folderBasic.addBinding(params, "colorMode", {
            label: 'Color Mode',
            options: { monochrome: "monochrome", colored: "colored" }
        });
        folderBasic.addBinding(params, "color", {
            label: 'Cell Color',
            view: "color",
            picker: "inline",
            expanded: true
        });
        folderBasic.addBinding(params, "boostBrightness", {
            label: 'Boost Brightness',
            min: 0, max: 0.2, step: 0.01
        });


        const folderAscii = pane.addFolder({ title: "ASCII" });
        folderAscii.addBinding(params, "asciiMode", {
            label: 'ASCII Mode',
            options: { classic: "classic", noise: "noise", numeric: "numeric", symbol: "symbol", letters: "letters", bichrome: "bichrome" }
        });
        folderAscii.addBinding(params, "asciiContrast", {
            label: 'ASCII Contrast',
            view: "checkbox"
        });
        const folderBg = pane.addFolder({ title: "Background" });
        folderBg.addBinding(params, "showVideo", {
            label: 'Show Video',
            view: "checkbox"
        }).on("change", (ev) => {
            setShowVideo(ev.value);
        });
        folderBg.addBinding(params, "bgColor", {
            label: 'Background Color',
            view: "color",
            picker: "inline",
            expanded: true
        }).on("change", (ev) => {
            setBackgroundColor(ev.value);
        });
        folderBg.addBinding(params, "bgBlur", {
            label: 'Background Blur',
            min: 0, max: 20, step: 1
        }).on("change", (ev) => {
            setBackgroundBlur(ev.value);
        });

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