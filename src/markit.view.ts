import { parse } from "@iandx/markit"
import { View } from "@dlightjs/dlight"
import { type Typed, div, type Pretty, ContentProp, required, Content, Prop } from "@dlightjs/types"
import BlockRenderer from "./blockView"

interface MarkitProps {
  str: ContentProp
  getAst?: (data: any) => any
}
@View
class MarkitView implements MarkitProps {
  /** @prop */
  @Content str = required
  @Prop getAst?: (data: any) => any

  /** @reactive */
  markitAst: any = parse(this.str)
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
