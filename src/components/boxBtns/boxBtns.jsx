import Btns from "./btns/btns"

import FunContextColor from "./context/hoverContext"
import FunContextClick from "./context/clickContext"


export default function BoxBtns(){
    return(
        <>
            <FunContextColor>
                <FunContextClick>
                    <Btns />
                </FunContextClick>
            </FunContextColor>
        </>
    )
}