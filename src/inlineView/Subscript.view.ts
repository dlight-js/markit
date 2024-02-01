import { View } from "@dlightjs/dlight"
import { type Pretty, sub, type Typed, type ContentProp, required, Content } from "@dlightjs/types"
import InlineRenderer from "."

interface SubscriptProps {
  ast: ContentProp
}
@View
class Subscript implements SubscriptProps {
  @Content ast = required

  View() {
    sub()
      .class("dlight-markit-subscript")
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }
}

export default Subscript as Pretty as Typed<SubscriptProps>
