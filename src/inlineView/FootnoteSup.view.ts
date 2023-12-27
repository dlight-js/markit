import { View } from "@dlightjs/dlight"
import { sup, a, type Typed, type Pretty, type ContentProp, Content, Prop, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"

interface FootnoteSupProps {
  ast: ContentProp
  props: any
}
@View
class FootnoteSup implements FootnoteSupProps {
  @Content ast = required

  @Prop props = required
  footnoteSupId = this.props.footnoteSupId

  View() {
    a()
      .href(`#Markit-Footnote-${this.ast}-0`)
      .class(this.dlightMarkitFootnoteSup$)
    {
      sup(this.ast)
        .id(`Markit-FootnoteSup-${this.ast}-${this.footnoteSupId}`)
        .class(this.dlightMarkitFootnoteSupSup$)
    }
  }

  dlightMarkitFootnoteSup$ = css`
    color: gray;
    text-decoration: none;
  `

  dlightMarkitFootnoteSupSup$ = css``
}

export default FootnoteSup as Pretty as Typed<FootnoteSupProps>
