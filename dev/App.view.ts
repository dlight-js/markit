import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { MarkitView } from "../src"

@View
class App {
  Body() {
    MarkitView("# okok\n## fine")
  }
}

export default App as Pretty as Typed
