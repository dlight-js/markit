import { View } from "@dlightjs/dlight"
import { type ContentProp, div, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import { css } from "@emotion/css"
import clsx from "clsx"

interface DividerProps {
  ast: ContentProp
  props: any
}
@View
class Divider implements DividerProps {
  @Content ast = required

  @Prop props = required
  dividerType = this.props.dividerType

  View() {
    div()
      .class(clsx(this.dlightMarkitDivider, "dlight-markit-divider"))
  }

  dlightMarkitDivider = css`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: gray;
    margin: 4px;
    height: 0px;
    width: auto;
    border-style: ${this.dividerType};
  `
}

export default Divider as Pretty as Typed<DividerProps>
