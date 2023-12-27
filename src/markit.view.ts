import { View } from "@dlightjs/dlight"
import { type Typed, div, type Pretty, ContentProp, required, Content, Prop } from "@dlightjs/types"
import BlockRenderer from "./blockView"
import { parse } from "@iandx/markit"

interface MarkitProps {
  ast: ContentProp
  getAst?: (data: any) => any
}
@View
class MarkitView implements MarkitProps {
  /** @prop */
  @Content ast = required
  @Prop getAst?: (data: any) => any

  /** @reactive */
  markitAst: any = parse(this.ast)
  omitAst = this.getAst?.(this.markitAst)

  /** @view */
  View() {
    div()
    {
      for (const ast of this.markitAst) {
        BlockRenderer[ast.type](ast.content)
          .props(ast.props)
      }
    }
  }
}

export default MarkitView as Pretty as Typed<MarkitProps>
