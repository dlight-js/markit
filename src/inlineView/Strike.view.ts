import { View } from "@dlightjs/dlight"
import { type Pretty, span, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import InlineRenderer from "."
import { css } from "@iandx/easy-css"

interface StrikeProps {
  ast: ContentProp
}
@View
class Strike implements StrikeProps {
  @Content ast = required

  View() {
    span()
      .class(this.dlightMarkitStrike$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitStrike$ = css`
    text-decoration: line-through;
  `
}

export default Strike as Pretty as Typed<StrikeProps>
