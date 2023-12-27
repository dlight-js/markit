import { View } from "@dlightjs/dlight"
import { type Pretty, sub, type Typed, type ContentProp, required, Content } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import InlineRenderer from "."

interface SubscriptProps {
  ast: ContentProp
}
@View
class Subscript implements SubscriptProps {
  @Content ast = required

  View() {
    sub()
      .class(this.dlightMarkitSubscript$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitSubscript$ = css``
}

export default Subscript as Pretty as Typed<SubscriptProps>
