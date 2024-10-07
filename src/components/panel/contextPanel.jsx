import { createContext, useState } from "react";
import gsap from "gsap";

export const ContextPanel = createContext()


export default function FunContextPanel({children}){

    const[stateColor, setStateColor] = useState(true)

    const screenWidth = window.innerWidth
    const panelDarkRight = screenWidth <= 1200 ? "55%" : "60%"

    const LightColor = () => {
        gsap.to("#panelLight", {right: 0, ease: "linear"})
        gsap.to("#panelDark", {right: panelDarkRight, ease: "linear"})
        
        if(stateColor === true){
            gsap.to("#wrapper", {background: "linear-gradient(180deg, #d4f7f5, #effefd)"})
            
            gsap.to(["#panelBox, #wrapperRibbon, #storyBox, #btnsColor"], {backgroundColor: "#b2e9e1"})
            gsap.to(["#panelLight, #panelDark, #text, #TextStory"], {color: "#00796b"})
        }

        setStateColor(false)
    }
    const DarkColor = () => {
        gsap.to("#panelLight", {right: panelDarkRight, ease: "linear"})
        gsap.to("#panelDark", {right: 0, ease: "linear"})

        if(stateColor === false){
            gsap.to("#wrapper", {background: "linear-gradient(180deg, #001932, #003366"})
            
            gsap.to(["#panelBox, #wrapperRibbon, #storyBox, #btnsColor"], {backgroundColor: "rgb(187, 186, 186, 0.1)"})
            gsap.to(["#panelLight, #panelDark, #text"], {color: "#fff"})
            gsap.to("#TextStory", {color: "rgb(187, 186, 186)"})
        }
        
        setStateColor(true)
    }
    

    const mouseLight = () => {
        gsap.fromTo("#panelLight", {fontSize: "3vmin"}, {fontSize: "4vmin", duration: 0.2, ease: "linear"})
    }
    const notMouseLight = () => {
        gsap.fromTo("#panelLight", {fontSize: "4vmin"}, {fontSize: "3vmin", duration: 0.2, ease: "linear"})
    }


    const mouseDark = () => {
        gsap.fromTo("#panelDark", {fontSize: "3vmin"}, {fontSize: "4vmin", duration: 0.2, ease: "linear"})
    }
    const notMouseDark = () => {
        gsap.fromTo("#panelDark", {fontSize: "4vmin"}, {fontSize: "3vmin", duration: 0.2, ease: "linear"})
    }

    return(
        <ContextPanel.Provider value={{LightColor, DarkColor, mouseLight, notMouseLight, mouseDark, notMouseDark}}>
            {children}
        </ContextPanel.Provider>
    )
}