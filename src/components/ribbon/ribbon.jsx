import styles from "./ribbon.module.css"
import gsap from "gsap"
import { useContext } from "react"

import { ContextBtn } from "../contextAll/clickContext"
import { ContextStoryColor } from "../contextAll/storyColor"


export default function Ribbon(){

    const {click} = useContext(ContextBtn)
    const {deleteAll} = useContext(ContextStoryColor)

    const mouseAdd = () => {
        gsap.fromTo("#btnAdd", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMouseAdd = () => {
        gsap.fromTo("#btnAdd", {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }


    const deleteRibbon = () => {
        const deleteAll = document.getElementById("ribbon")
        deleteAll.innerHTML = ""
    }

    const deleteColor = () => {
        deleteRibbon()
        deleteAll()
    }

    return(
        <>
            <div id="wrapperRibbon" className={styles.wrapper}>
                <div className={styles.wrapperColor}>
                    <div id="ribbon" className={styles.colorBox}></div>

                    <div onClick={click} className={styles.ColorAdd}><ion-icon name="add-circle-outline"></ion-icon></div>
                </div>

                <div className={styles.wrapperBtn}>
                    <button id="btnAdd" onClick={deleteColor} onMouseEnter={mouseAdd} onMouseLeave={notMouseAdd} className={styles.btnDelete}>Удалить всё</button>
                </div>
            </div>
        </>
    )
}