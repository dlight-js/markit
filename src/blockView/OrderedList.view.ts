import { View } from "@dlightjs/dlight"
import { type ContentProp, li, ol, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import BlockRenderer from "."
import InlineRenderer from "../inlineView"

interface OrderedListProps {
  ast: ContentProp
  props: any
}
@View
class OrderedList implements OrderedListProps {
  @Content ast = required

  @Prop props = required
  start = this.props.start

  View() {
    ol()
      .start(this.start)
      .class("dlight-markit-ordered-list-ol")
    {
      for (const { content, item: itemList } of this.ast) {
        li()
          .class("dlight-markit-ordered-list-li")
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

export default OrderedList as Pretty as Typed<OrderedListProps>
