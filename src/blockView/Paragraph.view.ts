import { View } from "@dlightjs/dlight"
import { type ContentProp, div, type Pretty, type Typed, Content, required } from "@dlightjs/types"
import InlineRenderer from "../inlineView"

interface ParagraphProps {
  ast: ContentProp
}
@View
class Paragraph implements ParagraphProps {
  @Content ast = required

  View() {
    div()
      .class("dlight-markit-paragraph")
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
          .props(content.props)
      }
    }
  }
}

export default Paragraph as Pretty as Typed<ParagraphProps>
