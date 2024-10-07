import styles from "./btns.module.css"
import { useContext } from "react"

import { ContextHover } from "../context/hoverContext"
import { ContextBtn } from "../../contextAll/clickContext"
import { PaletteContext } from "../context/PaletteContext"
import { ContextStoryColor } from "../../contextAll/storyColor"


export default function Btns(){

    const {mouseColor, notMouseColor, mousePalette, notMousePalette} = useContext(ContextHover)
    const {click} = useContext(ContextBtn)
    const {btnsColor} = useContext(PaletteContext)
    const {handleColorClick} = useContext(ContextStoryColor)


    return(
        <>
            <div className={styles.wrapper}>
                <div id="btnsColor" className={styles.wrapperBtns}>
                    <button id="btnColor" onClick={click} onMouseEnter={mouseColor} onMouseLeave={notMouseColor} className={styles.btnColor}>Добавить цвет</button>
                    
                    <div id="boxPalette" className={styles.btnPaletteBox}>
                        {Array.from({ length: 40 }).map((_, index) => (
                            <div key={index} className={styles.Palette}><div onClick={handleColorClick} className={styles.PaletteItem}></div></div>
                        ))}
                    </div>
                </div>



                <div className={styles.wrapperColor}>
                    <button id="btnPalette" onClick={btnsColor} onMouseEnter={mousePalette} onMouseLeave={notMousePalette} className={styles.btnPalette}><ion-icon name="color-palette"></ion-icon></button>
                </div>
            </div>
        </>
    )
}