import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { MarkitView } from "../src"
import { css } from "@emotion/css"

@View
class App {
  content = "jj \n# okk\n jfieaf`shit`"
  View() {
    button("click me")
      .onClick(() => {
        this.content += "clicked"
      })
    div()
      .class(css`
      .dlight-markit-code{
        color: red;

      }
      
      `); {
      MarkitView(this.content)
    }
  }
}

export default App as Pretty as Typed
