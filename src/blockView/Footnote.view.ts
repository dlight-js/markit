import { View } from "@dlightjs/dlight"
import { a, div, type Pretty, span, type Typed, type ContentProp, Content, Prop, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import Markit from "@iandx/markit"
import InlineRenderer from "../inlineView"

interface FootnoteProps {
  ast: ContentProp
  props: any
}
@View
class Footnote implements FootnoteProps {
  @Content ast = required

  @Prop props = required
  noteName = this.props.noteName
  footnoteIdx = this.props.footnoteIdx
  rerender = this.props.rerender
  elementOrder = this.props.elementOrder

  footNoteSubTrees: any = Markit.ast
    .findInlineItems("FootnoteSup", footnoteSup => footnoteSup.content === this.noteName)

  View() {
    div()
      .id(`Markit-Footnote-${this.noteName}-${this.footnoteIdx}`)
      .class(this.dlightMarkitFootNoteWrap$)
    {
      span(`[${this.noteName}] `)
        .class(this.dlightMarkitNoteName$)
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
      for (const footnoteSup of this.footNoteSubTrees) {
        a("↩")
          .href(`#Markit-FootnoteSup-${this.noteName}-${footnoteSup.props.footnoteSupId}`)
          .class(this.dlightMarkitFootNote$)
      }
    }
  }

  dlightMarkitFootNoteWrap$ = css`
    font-size: small;
  `

  dlightMarkitNoteName$ = css`
    white-space: pre-wrap;
  `

  dlightMarkitFootNote$ = css`
      text-decoration: none;
      color: gray;
  `
}

export default Footnote as Pretty as Typed<FootnoteProps>
