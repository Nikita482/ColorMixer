import Btns from "./btns/btns"

import FunContextColor from "./context/hoverContext"
import FunPaletteContext from "./context/PaletteContext"


export default function BoxBtns(){
    return(
        <>
            <FunContextColor>
                <FunPaletteContext>
                    <Btns />
                </FunPaletteContext>
            </FunContextColor>
        </>
    )
}