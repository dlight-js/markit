import { View } from "@dlightjs/dlight"
import { a, Content, Prop, required, type ContentProp, type Pretty, type Typed } from "@dlightjs/types"
import InlineRenderer from "."
import { css } from "@iandx/easy-css"

interface LinkProps {
  ast: ContentProp
  props: any
}

@View
class Link implements LinkProps {
  @Content ast = required

  @Prop props = required
  linkUrl = this.props.linkUrl

  View() {
    a()
      .href(this.linkUrl)
      .class(this.dlightMarkitLink$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }

  dlightMarkitLink$ = css``
}

export default Link as Pretty as Typed<LinkProps>
