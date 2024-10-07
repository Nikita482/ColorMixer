import { createContext, useState } from "react";
import gsap from "gsap";

export const PaletteContext = createContext()


export default function FunPaletteContext({children}){

    const[counterBtn, setCounterBtn] = useState(0)

    const btnsColor = () => {
        setCounterBtn(prev => prev + 1)
        
        if(counterBtn % 2 === 0){
            gsap.to("#btnPalette", {pointerEvents: "none"})
            gsap.to(["#btnGrb", "#btnColor"], {opacity: 0, display: "none"})
            gsap.to("#boxPalette", {opacity: 1, display: "flex", delay: 0.5})
            gsap.to("#btnPalette", {pointerEvents: "auto", delay: 1})
        }else{
            gsap.to("#btnPalette", {pointerEvents: "none"})
            gsap.to("#boxPalette", {opacity: 0, display: "none"})
            gsap.to(["#btnGrb", "#btnColor"], {opacity: 1, display: "block", delay: 0.5})
            gsap.to("#btnPalette", {pointerEvents: "auto", delay: 1})
        }
    }

    return(
        <PaletteContext.Provider value={{btnsColor}}>
            {children}
        </PaletteContext.Provider>
    )
}