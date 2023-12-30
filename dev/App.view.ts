import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { MarkitView } from "../src"

@View
class App {
  content = "jj"
  View() {
    button("click me")
      .onClick(() => {
        this.content += "clicked"
      })
    MarkitView(this.content)
  }
}

export default App as Pretty as Typed
