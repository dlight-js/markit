import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { MarkitView } from "../src"

@View
class App {
  View() {
    MarkitView("# okok\n## fine\n* hhh\n * apple")
  }
}

export default App as Pretty as Typed
