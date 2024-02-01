import { View } from "@dlightjs/dlight"
import { a, Content, Prop, required, type ContentProp, type Pretty, type Typed } from "@dlightjs/types"
import InlineRenderer from "."

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
      .class("dlight-markit-link")
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }
}

export default Link as Pretty as Typed<LinkProps>
