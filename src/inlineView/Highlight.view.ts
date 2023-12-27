import { View } from "@dlightjs/dlight"
import { type Pretty, span, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import InlineRenderer from "."
import { css } from "@iandx/easy-css"

interface HighlightProps {
  ast: ContentProp
}

@View
class Highlight implements HighlightProps {
  @Content ast = required

  View() {
    span()
      .class(this.dlightMarkitHighlight$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitHighlight$ = css`
    background-color: yellow;
  `
}

export default Highlight as Pretty as Typed<HighlightProps>
