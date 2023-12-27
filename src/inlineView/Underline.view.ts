import { View } from "@dlightjs/dlight"
import { type Pretty, span, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import InlineRenderer from "."
import { css } from "@iandx/easy-css"

interface UnderlineProps {
  ast: ContentProp
}
@View
class Underline implements UnderlineProps {
  @Content ast = required

  View() {
    span()
      .class(this.dlightMarkitUnderline$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitUnderline$ = css`
    text-decoration: underline;
  `
}
export default Underline as Pretty as Typed<UnderlineProps>
