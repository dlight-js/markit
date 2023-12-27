import { View } from "@dlightjs/dlight"
import { type Pretty, span, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"

interface TextProps {
  ast: ContentProp
}
@View
class Text implements TextProps {
  @Content ast = required

  View() {
    span(this.ast)
      .class(this.dlightMarkitText$)
  }

  dlightMarkitText$ = css``
}

export default Text as Pretty as Typed<TextProps>
