import styles from "./panel.module.css"
import { useContext } from "react"

import Window from "./window/window"
import { ContextPanel } from "./contextPanel"


export default function Panel(){

    const {LightColor, DarkColor, mouseLight, notMouseLight, mouseDark, notMouseDark} = useContext(ContextPanel)

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperPadding}>
                    <div id="panelBox" className={styles.paddingPanel}>
                        <div id="panelLight" onClick={LightColor} onMouseEnter={mouseLight} onMouseLeave={notMouseLight} className={styles.ColorLight}><ion-icon name="sunny"></ion-icon></div>
                        <div id="panelDark" onClick={DarkColor} onMouseEnter={mouseDark} onMouseLeave={notMouseDark} className={styles.ColorDark}><ion-icon name="moon"></ion-icon></div>
                    </div>

                    <p id="text">Mixer</p>

                    <div id="menu" className={styles.menu}>
                        <Window />
                    </div>
                </div>
            </div>
        </>
    )
}