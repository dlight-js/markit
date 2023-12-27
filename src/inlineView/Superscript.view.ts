import { View } from "@dlightjs/dlight"
import { type Pretty, sup, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import InlineRenderer from "."

interface SuperscriptProps {
  ast: ContentProp
}
@View
class Superscript {
  @Content ast = required

  View() {
    sup()
      .class(this.dlightMarkitSupscript$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitSupscript$ = css``
}

export default Superscript as Pretty as Typed<SuperscriptProps>
