import styles from "./story.module.css"
import gsap from "gsap"


export default function Story(){

    const mouseDelete = () => {
        gsap.fromTo("#btnDelete", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMouseDelete = () => {
        gsap.fromTo("#btnDelete", {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperBox}>
                    <h1>История цветов</h1>
                </div>

                <div className={styles.wrapperBtn}>
                    <button id="btnDelete" onMouseEnter={mouseDelete} onMouseLeave={notMouseDelete}>Удалить всё</button>
                </div>
            </div>
        </>
    )
}