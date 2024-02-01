import { View } from "@dlightjs/dlight"
import { sup, a, type Typed, type Pretty, type ContentProp, Content, Prop, required } from "@dlightjs/types"
import { css } from "@emotion/css"
import clsx from "clsx"

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
      .class(clsx(this.dlightMarkitFootnoteSup, "dlight-markit-footnote-sup"))
    {
      sup(this.ast)
        .id(`Markit-FootnoteSup-${this.ast}-${this.footnoteSupId}`)
        .class("dlight-markit-footnote-sup")
    }
  }

  dlightMarkitFootnoteSup = css`
    color: gray;
    text-decoration: none;
  `
}

export default FootnoteSup as Pretty as Typed<FootnoteSupProps>
