import { View } from "@dlightjs/dlight"
import { type ContentProp, div, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import InlineRenderer from "../inlineView"

interface CodeBlockProps {
  ast: ContentProp
  props: any
}

@View
class CodeBlock implements CodeBlockProps {
  @Content ast = required

  @Prop props = required
  language = this.props.language

  View() {
    div()
    {
      InlineRenderer.Text(this.ast)
    }
  }
}

export default CodeBlock as Pretty as Typed<CodeBlockProps>
