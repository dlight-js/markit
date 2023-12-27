import { View } from "@dlightjs/dlight"
import { type ContentProp, div, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
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
      .class(clsx(this.dlightMarkitDivider$, this.dlightMarkitDivider$_(this.dividerType)))
  }

  dlightMarkitDivider$ = css`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: gray;
    margin: 4px;
    height: 0px;
    width: auto;
  `
  dlightMarkitDivider$_ = (borderType: string) => css`
    border-style: ${borderType};
  `
}

export default Divider as Pretty as Typed<DividerProps>
