import { View } from "@dlightjs/dlight"
import { type Pretty, span, type Typed, type ContentProp, Content, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"

interface CodeProps {
  ast: ContentProp
}
@View
class Code implements CodeProps {
  @Content ast = required

  View() {
    span(this.ast)
      .class(this.dlightMarkitCode$)
  }

  dlightMarkitCode$ = css`
    border-radius: 4px;
    background-color: Gainsboro;
    color: DarkOrange;
    padding: 4px;
    font-size: 95%;
`
}

export default Code as Pretty as Typed<CodeProps>
