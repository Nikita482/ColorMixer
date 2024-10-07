import styles from "./spinner.module.css";
import { useContext } from "react";

import { ContextStoryColor } from "../contextAll/storyColor";

export default function Spinner() {
    
    const {mixedColor} = useContext(ContextStoryColor);

    return (
        <>
            <div className={styles.wrapper} style={{backgroundColor: mixedColor}}>
                <h1>{mixedColor}</h1>
            </div>
        </>
    );
}
