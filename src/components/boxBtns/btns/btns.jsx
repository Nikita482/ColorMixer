import styles from "./btns.module.css"
import { useContext } from "react"

import Window from "../window/window"
import { ContextHover } from "../context/hoverContext"
import { ContextClick } from "../context/clickContext"


export default function Btns(){

    const {mouseRgb, notMouseRgb, mouseColor, notMouseColor, mouseMix, notMouseMix, mousePalette, notMousePalette} = useContext(ContextHover)
    const {click} = useContext(ContextClick)

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperBtns}>
                    <button id="btnGrb" onMouseEnter={mouseRgb} onMouseLeave={notMouseRgb} className={styles.btnRgb}>Создать rgb</button>
                    <button id="btnColor" onClick={click} onMouseEnter={mouseColor} onMouseLeave={notMouseColor} className={styles.btnColor}>Добавить цвет</button>
                    <Window />
                </div>

                <div className={styles.wrapperColor}>
                    <button id="btnPalette" onMouseEnter={mousePalette} onMouseLeave={notMousePalette} className={styles.btnPalette}><ion-icon name="color-palette"></ion-icon></button>
                </div>

                <div className={styles.wrapperMix}>
                    <button id="btnMix" onMouseEnter={mouseMix} onMouseLeave={notMouseMix} className={styles.btnMix}>Mix</button>
                </div>
            </div>
        </>
    )
}