import { View } from "@dlightjs/dlight"
import { type ContentProp, tag, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"
import InlineRenderer from "../inlineView"

interface HeadingProps {
  ast: ContentProp
  props: any
}
@View
class Heading implements HeadingProps {
  @Content ast = required

  @Prop props = required
  headdingName = `h${this.props.headingLevel}`

  View() {
    tag(this.headdingName)()
      .class(this.dlightMarkitHeading$)
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
          .props(content.props)
      }
    }
  }

  dlightMarkitHeading$ = css``
}

export default Heading as Pretty as Typed<HeadingProps>
