import { View } from "@dlightjs/dlight"
import { li, ul, type Typed, type Pretty, type ContentProp, Content, Prop, required } from "@dlightjs/types"
import BlockRenderer from "."
import InlineRenderer from "../inlineView"

interface UnorderedListProps {
  ast: ContentProp
  props: any
}
@View
class UnorderedList implements UnorderedListProps {
  @Content ast = required

  @Prop props = required
  level = this.props.level

  View() {
    ul()
      .class("dlight-markit-unordered-list-ul")
    {
      for (const { content, item: itemList } of this.ast) {
        li()
          .class("dlight-markit-unordered-list-li")
        {
          for (const item of itemList) {
            InlineRenderer[item.type](item.content)
              .props(item.props)
          }
        }
        for (const subcontent of content) {
          BlockRenderer[subcontent.type](subcontent.content)
            .props(subcontent.props)
        }
      }
    }
  }
}

export default UnorderedList as Pretty as Typed<UnorderedListProps>
