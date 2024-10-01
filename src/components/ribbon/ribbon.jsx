import styles from "./ribbon.module.css"
import gsap from "gsap"


export default function Ribbon(){

    const mouseAdd = () => {
        gsap.fromTo("#btnAdd", {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"}, {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"})
    }
    const notMouseAdd = () => {
        gsap.fromTo("#btnAdd", {background: "linear-gradient(to right, #8b30ff, #4596ff, #8b30ff)", fontSize: "3.5vmin"}, {background: "linear-gradient(to right, #6a11cb, #2575fc, #6a11cb)", fontSize: "3vmin"})
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperColor}>
                    <div className={styles.boxColor}>
                        <div className={styles.color}></div>
                        <div className={styles.plus}>+</div>
                    </div>

                    <div className={styles.boxColor}>
                        <div className={styles.color}></div>
                    </div>

                    <div className={styles.ColorAdd}><ion-icon name="add-circle-outline"></ion-icon></div>
                </div>

                <div className={styles.wrapperBtn}>
                    <button id="btnAdd" onMouseEnter={mouseAdd} onMouseLeave={notMouseAdd} className={styles.btnDelete}>Удалить всё</button>
                </div>
            </div>
        </>
    )
}