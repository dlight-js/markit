import { View } from "@dlightjs/dlight"
import { type Pretty, strong, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import InlineRenderer from "."

interface BoldProps {
  ast: ContentProp
}
@View
class Bold implements BoldProps {
  @Content ast = required

  View() {
    strong()
      .class(this.dlightMarkitBold$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitBold$ = css``
}

export default Bold as Pretty as Typed<BoldProps>
