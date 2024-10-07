import { createContext, useState } from "react";
import gsap from "gsap";

export const ContextBtn = createContext()


export default function FunClickContext({children}){

    const[menu, setMenu] = useState(true)

    const click = () => {
        if(menu === true){
            gsap.to("#menu", {opacity: 1, pointerEvents: "auto"})
        }else{
            gsap.to("#menu", {opacity: 0, pointerEvents: "none"})
        }
        setMenu(!menu)
    }
    
    return(
        <ContextBtn.Provider value={{click}}>
            {children}
        </ContextBtn.Provider>
    )
}