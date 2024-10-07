import styles from "./window.module.css";
import { ChromePicker } from 'react-color';
import { useContext } from "react";

import { ContextStoryColor } from "../../contextAll/storyColor";
import { ContextBtn } from "../../contextAll/clickContext";


export default function Window() {

    const {clickColor, color, AddColor} = useContext(ContextStoryColor)
    const {click} = useContext(ContextBtn)

    return (
        <>
            <div className={styles.wrapper}>
                <ChromePicker color={color} onChangeComplete={clickColor} width={"50%"}/>

                <div className={styles.widthPabel}>
                    <div className={styles.wrapperColor} style={{backgroundColor: color}}></div>
                    <button className={styles.widthBtnAdd} onClick={AddColor}>Добавить</button>
                    <button className={styles.widthBtnAdd} onClick={click}>Закрыть</button>
                </div>
            </div>
        </>
    );
}

