import { View } from "@dlightjs/dlight"
import { type ContentProp, tag, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import InlineRenderer from "../inlineView"

interface HeadingProps {
  ast: ContentProp
  props: any
}
@View
class Heading implements HeadingProps {
  @Content ast = required

  @Prop props = required
  headingName = `h${this.props.headingLevel}`

  View() {
    tag(this.headingName)()
      .class("dlight-markit-heading")
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
          .props(content.props)
      }
    }
  }
}

export default Heading as Pretty as Typed<HeadingProps>
