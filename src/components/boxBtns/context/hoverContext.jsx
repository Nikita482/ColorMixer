import { createContext } from "react";
import gsap from "gsap";

export const ContextHover = createContext()


export default function FunContextColor({children}){

    const mouseRgb = () => {
        gsap.fromTo("#btnGrb", {background: "linear-gradient(to right, #6a11cb, #2575fc)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff)", fontSize: "3.5vmin"})
    }
    const notMouseRgb = () => {
        gsap.fromTo("#btnGrb", {background: "linear-gradient(to right, #8b30ff, #4596ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc)", fontSize: "3vmin"})
    }

    const mouseColor = () => {
        gsap.fromTo("#btnColor", {background: "linear-gradient(to right, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMouseColor = () => {
        gsap.fromTo("#btnColor", {background: "linear-gradient(to right, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }

    const mouseMix = () => {
        gsap.fromTo("#btnMix", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMouseMix = () => {
        gsap.fromTo("#btnMix", {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }

    const mousePalette = () => {
        gsap.fromTo("#btnPalette", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMousePalette = () => {
        gsap.fromTo("#btnPalette", {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }
    
    const Fun = {mouseRgb, notMouseRgb, mouseColor, notMouseColor, mouseMix, notMouseMix, mousePalette, notMousePalette}

    return(
        <ContextHover.Provider value={Fun}>
            {children}
        </ContextHover.Provider>
    )
}