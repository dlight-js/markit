import { View } from "@dlightjs/dlight"
import { type Pretty, span, type Typed, type ContentProp, Content, required } from "@dlightjs/types"

interface TextProps {
  ast: ContentProp
}
@View
class Text implements TextProps {
  @Content ast = required

  View() {
    span(this.ast)
      .class("dlight-markit-text")
  }
}

export default Text as Pretty as Typed<TextProps>
