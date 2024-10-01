import styles from "./panel.module.css"


export default function Panel(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperPadding}>
                    <div className={styles.paddingPanel}>
                        <div className={styles.panelStory}><button><ion-icon name="bulb"></ion-icon></button></div>

                        <div className={styles.panelBase}>
                            <div className={styles.baseColor}>
                                <div className={styles.ColorLight}><ion-icon name="sunny"></ion-icon></div>
                                <div className={styles.ColorDark}><ion-icon name="moon"></ion-icon></div>
                            </div>
                        </div>
                    </div>

                    <p>Mixer</p>
                </div>
            </div>
        </>
    )
}