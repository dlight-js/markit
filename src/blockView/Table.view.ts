import { View } from "@dlightjs/dlight"
import { table, th, tr, td, type Typed, type Pretty, type ContentProp, Content, Prop, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import InlineRenderer from "../inlineView"

interface TableProps {
  ast: ContentProp
  props: any
}
@View
class Table implements TableProps {
  @Content ast = required

  @Prop props = required
  headerAligns = this.props.headerAligns
  rowAligns = this.props.rowAligns

  View() {
    table()
      .class(this.dlightMarkitTableStyle$)
    {
      tr()
        .class(this.dlightMarkitTableTrStyle$)
      {
        for (const [index, headerColumn] of this.ast[0].entries()) {
          for (const { type, content, props } of headerColumn) {
            th()
              .class(this.dlightMarkitTableThStyle$(this.headerAligns[index]))
            {
              InlineRenderer[type](content)
                .props(props)
            }
          }
        }
      }
      for (const cellRow of this.ast.slice(1)) {
        tr()
          .class(this.dlightMarkitTableTrStyle$)
        {
          for (const [index, cellColumn] of cellRow.entries()) {
            for (const { type, content, props } of cellColumn) {
              td()
                .class(this.dlightMarkitTableTdStyle$(this.rowAligns[index]))
              {
                if (type) {
                  InlineRenderer[type](content)
                    .props(props)
                }
              }
            }
          }
        }
      }
    }
  }

  dlightMarkitTableStyle$ = css`
    border-collapse: collapse;
  `

  dlightMarkitTableTrStyle$ = css``

  dlightMarkitTableThStyle$ = (align: string) => css`
    border: solid 1px gray;
    padding: 5px;
    text-align: ${align};
  `

  dlightMarkitTableTdStyle$ = (align: string) => css`
    border: solid 1px gray;
    padding: 5px;
    text-align: ${align};
  `
}

export default Table as Pretty as Typed<TableProps>
