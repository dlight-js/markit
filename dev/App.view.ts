import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { MarkitView } from "../src"

@View
class App {
  View() {
    MarkitView("")
  }
}

export default App as Pretty as Typed
