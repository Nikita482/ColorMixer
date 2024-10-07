import styles from "./App.module.css"

import Spinner from "./components/spinner/spinner"
import Panel from "./components/panel/panel"
import Ribbon from "./components/ribbon/ribbon"
import BoxBtns from "./components/boxBtns/boxBtns"
import Story from "./components/story/story"

import FunStoryColor from "./components/contextAll/storyColor"
import FunClickContext from "./components/contextAll/clickContext"
import FunContextPanel from "./components/panel/contextPanel"


export default function App() {
  return (
    <>
      <FunStoryColor>
        <FunClickContext>
          <FunContextPanel>
            <div id="wrapper" className={styles.wrapper}>
              <div className={styles.wrapperTop}>
                <div className={styles.wrapperName}><p id="text">Color</p></div>
                <div className={styles.wrapperSpinner}><Spinner /></div>
                <div className={styles.wrapperMemu}><Panel /></div>
              </div>

              <div className={styles.wrapperBottom}>
                <div className={styles.wrapperRibbon}><Ribbon /></div>

                <div className={styles.wrapperBtns}><BoxBtns /></div>

                <div className={styles.wrapperStory}><Story /></div>
              </div>
            </div>
          </FunContextPanel>
        </FunClickContext>
      </FunStoryColor>
    </>
  )
}




