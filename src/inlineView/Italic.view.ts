import { View } from "@dlightjs/dlight"
import { em, type Typed, type Pretty, type ContentProp, Content, required } from "@dlightjs/types"
import InlineRenderer from "."

interface ItalicProps {
  ast: ContentProp
}
@View
class Italic implements ItalicProps {
  @Content ast = required

  View() {
    em()
      .class("dlight-markit-italic")
    {
      for (const content of this.ast) {
        InlineRenderer[content.type](content.content)
      }
    }
  }
}

export default Italic as Pretty as Typed<ItalicProps>
