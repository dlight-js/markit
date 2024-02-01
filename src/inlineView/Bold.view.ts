import { View } from "@dlightjs/dlight"
import { type Pretty, strong, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import InlineRenderer from "."

interface BoldProps {
  ast: ContentProp
}
@View
class Bold implements BoldProps {
  @Content ast = required

  View() {
    strong()
      .class("dlight-markit-bold")
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }
}

export default Bold as Pretty as Typed<BoldProps>
