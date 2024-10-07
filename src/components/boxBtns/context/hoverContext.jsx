import { createContext, useState } from "react";
import gsap from "gsap";

export const ContextHover = createContext()


export default function FunContextColor({children}){

    const mouseColor = () => {
        gsap.fromTo("#btnColor", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff , #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMouseColor = () => {
        gsap.fromTo("#btnColor", {background: "linear-gradient(to right, #8b30ff , #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }

    const mousePalette = () => {
        gsap.fromTo("#btnPalette", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMousePalette = () => {
        gsap.fromTo("#btnPalette", {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }
    
    const Fun = {mouseColor, notMouseColor, mousePalette, notMousePalette}

    return(
        <ContextHover.Provider value={Fun}>
            {children}
        </ContextHover.Provider>
    )
}