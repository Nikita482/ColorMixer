import { createContext, useState, useEffect } from "react";
import { borderRadius, mix } from "polished";
import gsap from "gsap";

export const ContextStoryColor = createContext();

export default function FunStoryColor({children}) {
    const [color, setColor] = useState("#fff");
    const [boxColors, setBoxColors] = useState([]);
    const [mixedColor, setMixedColor] = useState("rgb(200, 200, 200)");

    const clickColor = (color) => {
        setColor(color.hex);
    };

    const stylesBoxColor = {
        width: "auto",
        height: "90%",
        display: "flex",
        flex: "0 0 auto",
        scrollSnapAlign: "start",
    };

    const stylesColor = {
        height: "100%",
        aspectRatio: "1 / 1",
        backgroundColor: color,
        borderRadius: "50%",
    };

    const stylesPlus = {
        height: "100%",
        aspectRatio: "1 / 3",
        fontSize: "3vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Montserrat, sans-serif",
        margin: "0 10px",
    };

    const AddColor = () => {
        const ribbon = document.getElementById("ribbon");

        const boxColor = document.createElement("div")
        const colorDiv = document.createElement("div")
        const plus = document.createElement("div")

        plus.innerText = "+";

        Object.assign(boxColor.style, stylesBoxColor);
        Object.assign(colorDiv.style, stylesColor);
        Object.assign(plus.style, stylesPlus);

        boxColor.appendChild(colorDiv);
        boxColor.appendChild(plus);

        if (ribbon.firstChild) {
            ribbon.insertBefore(boxColor, ribbon.firstChild);
        } else {
            ribbon.appendChild(boxColor); 
        }

        AddColorText()
        funWrapperStory()
    };

    const AddColorText = () => {
        setBoxColors(prevBoxColors => [...prevBoxColors, color]);
    };
    
    useEffect(() => {
        if (boxColors.length === 0) return;

        let mixedColor = boxColors[0];
        for (let i = 1; i < boxColors.length; i++) {
            mixedColor = mix(1 / (i + 1), mixedColor, boxColors[i]);
        }
        setMixedColor(mixedColor);
    }, [boxColors]);

    const deleteAll = () => {
        setMixedColor("#fff")
    }


    const styleStory = {
        height: "80%",
        aspectRatio: "1 / 1",
        backgroundColor: mixedColor,
        borderRadius: "50%",
        marginRight: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#7F7F7F",
        fontSize: "2vmin",
        transitionDuration: "500ms",
    }
    
    const styleDivDeleteButton = {
        fontSize: "3vmin",
        height: "50%",
        aspectRatio: "1 / 1",
        borderRadius: "50%"
    }

    const tl = gsap.timeline()

    const funWrapperStory = () => {
        const story = document.getElementById("wrapperStory")

        const div = document.createElement("div")
        
        div.innerText = mixedColor

        div.addEventListener("mouseenter", () => {
            div.style.transform = "scale(1.1)"
            div.innerText = " "
            
            const divDelete = document.createElement("button")

            Object.assign(divDelete.style, styleDivDeleteButton)

            divDelete.addEventListener("click", () => {
                div.remove()
            })


            divDelete.innerText = "-"

            div.appendChild(divDelete)
        })

        div.addEventListener("mouseleave", () => {
            div.style.transform = "scale(1)"
            div.innerText = mixedColor

        })

        Object.assign(div.style, styleStory)

        if (story.firstChild) {
            story.insertBefore(div, story.firstChild);
        } else {
            story.appendChild(div);
        }

        tl.to("#TextStory", {opacity: 0, pointerEvents: "none"})
          .to("#TextStory", {width: "0%"})
    }


    const seleteStory = () => {
        tl.to("#TextStory", {width: "20%"})
        .to("#TextStory", {opacity: 1, pointerEvents: "auto"})
        const story = document.getElementById("wrapperStory")
        story.innerHTML = " "
    }


    const[counterPalette, setCounterPalette] = useState([])
    const handleColorClick = (e) => {
        const PaletteColor = getComputedStyle(e.target).backgroundColor;
    
        setCounterPalette(prev => [...prev, PaletteColor]);
    
        // Смешиваем цвета после обновления состояния
        setMixedColor((prevMixedColor) => {
            let mixed = prevMixedColor;
            if (counterPalette.length > 0) {
                mixed = mix(1 / (counterPalette.length + 1), mixed, PaletteColor);
            } else {
                mixed = PaletteColor; 
            }
            return mixed;
        });
    
        const stylesPaletteBoxColor = {
            width: "auto",
            height: "90%",
            display: "flex",
            flex: "0 0 auto",
            scrollSnapAlign: "start",
        };
        const stylesPaletteColor = {
            height: "100%",
            aspectRatio: "1 / 1",
            backgroundColor: PaletteColor,
            borderRadius: "50%",
        };
        const stylesPalettePlus = {
            height: "100%",
            aspectRatio: "1 / 3",
            fontSize: "3vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Montserrat, sans-serif",
            margin: "0 10px",
        };
    
        const ribbon = document.getElementById("ribbon");
    
        const boxColor = document.createElement("div");
        const colorDiv = document.createElement("div");
        const plus = document.createElement("div");
    
        plus.innerText = "+";
    
        Object.assign(boxColor.style, stylesPaletteBoxColor);
        Object.assign(colorDiv.style, stylesPaletteColor);
        Object.assign(plus.style, stylesPalettePlus);
    
        boxColor.appendChild(colorDiv);
        boxColor.appendChild(plus);
    
        if (ribbon.firstChild) {
            ribbon.insertBefore(boxColor, ribbon.firstChild);
        } else {
            ribbon.appendChild(boxColor); 
        }
        funWrapperStory()
    };
    


    return (
        <ContextStoryColor.Provider value={{clickColor, AddColor, deleteAll, seleteStory, handleColorClick, color, mixedColor}}>
            {children}
        </ContextStoryColor.Provider>
    );
}
