import { createContext, useState } from "react";
import gsap from "gsap";

export const ContextClick = createContext()


export default function FunContextClick({children}){

    const[windowState, setWindowState] = useState(true)

    const click = () => {
        if(windowState === true){
            gsap.to("#wrapper", {top: "-700%", height: "700%", opacity: 1})
        }else{
            gsap.to("#wrapper", {top: "20%", height: "50%", pointerEvents: "none", opacity: 0})
        }
        setWindowState(!windowState)
    }

    return(
        <ContextClick.Provider value={{click}}>
            {children}
        </ContextClick.Provider>
    )
}