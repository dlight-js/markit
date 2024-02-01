import { View } from "@dlightjs/dlight"
import { type Pretty, span, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import InlineRenderer from "."
import { css } from "@emotion/css"
import clsx from "clsx"

interface HighlightProps {
  ast: ContentProp
}

@View
class Highlight implements HighlightProps {
  @Content ast = required

  View() {
    span()
      .class(clsx(this.dlightMarkitHighlight, "dlight-markit-highlight"))
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitHighlight = css`
    background-color: yellow;
  `
}

export default Highlight as Pretty as Typed<HighlightProps>
