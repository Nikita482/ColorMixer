import styles from "./story.module.css"
import gsap from "gsap"
import { useContext } from "react"

import { ContextStoryColor } from "../contextAll/storyColor"



export default function Story(){

    const{seleteStory} = useContext(ContextStoryColor)

    const mouseDelete = () => {
        gsap.fromTo("#btnDelete", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMouseDelete = () => {
        gsap.fromTo("#btnDelete", {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }

    return(
        <>
            <div id="storyBox" className={styles.wrapper}>
                <div className={styles.wrapperBox}>
                    <div id="wrapperStory" className={styles.boxItems}></div>

                    <h1 id="TextStory" className={styles.boxText}>История цветов</h1>
                </div>

                <div className={styles.wrapperBtn}>
                    <button id="btnDelete" onClick={seleteStory} onMouseEnter={mouseDelete} onMouseLeave={notMouseDelete}>Удалить всё</button>
                </div>
            </div>
        </>
    )
}