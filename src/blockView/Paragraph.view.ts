import { View } from "@dlightjs/dlight"
import { type ContentProp, div, type Pretty, type Typed, Content, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import InlineRenderer from "../inlineView"

interface ParagraphProps {
  ast: ContentProp
}
@View
class Paragraph implements ParagraphProps {
  @Content ast = required

  View() {
    div()
      .class(this.dlightMarkitParagraph$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
          .props(content.props)
      }
    }
  }

  dlightMarkitParagraph$ = css``
}

export default Paragraph as Pretty as Typed<ParagraphProps>
