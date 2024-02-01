import { View } from "@dlightjs/dlight"
import { table, th, tr, td, type Typed, type Pretty, type ContentProp, Content, Prop, required } from "@dlightjs/types"
import { css } from "@emotion/css"
import InlineRenderer from "../inlineView"
import { clsx } from "clsx"

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
      .class(clsx(this.dlightMarkitTable, "dlight-markit-table"))
    {
      tr()
        .class("dlight-markit-table-tr")
      {
        for (const [index, headerColumn] of this.ast[0].entries()) {
          for (const { type, content, props } of headerColumn) {
            th()
              .class(clsx(this.dlightMarkitTableTh(this.headerAligns[index]), "dlight-markit-table-th"))
            {
              InlineRenderer[type](content)
                .props(props)
            }
          }
        }
      }
      for (const cellRow of this.ast.slice(1)) {
        tr()
          .class("dlight-markit-table-tr")
        {
          for (const [index, cellColumn] of cellRow.entries()) {
            for (const { type, content, props } of cellColumn) {
              td()
                .class(clsx(this.dlightMarkitTableTd(this.rowAligns[index]), "dlight-markit-table-td"))
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

  dlightMarkitTable = css`
    border-collapse: collapse;
  `

  dlightMarkitTableTh = (align: string) => css`
    border: solid 1px gray;
    padding: 5px;
    text-align: ${align};
  `

  dlightMarkitTableTd = (align: string) => css`
    border: solid 1px gray;
    padding: 5px;
    text-align: ${align};
  `
}

export default Table as Pretty as Typed<TableProps>
