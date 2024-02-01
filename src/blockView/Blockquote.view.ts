import { View } from "@dlightjs/dlight"
import { blockquote, Content, required, type ContentProp, type Pretty, type Typed } from "@dlightjs/types"
import { css } from "@emotion/css"
import BlockRenderer from "."
import clsx from "clsx"

interface BlockquoteProps {
  ast: ContentProp
}

@View
class Blockquote implements BlockquoteProps {
  @Content ast = required

  View() {
    blockquote()
      .class(clsx(this.dlightMarkitBlockquote, "dlight-markit-blockquote"))
    {
      for (const content of this.ast) {
        BlockRenderer[content.type](content.content)
          .props(content.props)
      }
    }
  }

  dlightMarkitBlockquote = css`
    padding: 4px 0 4px 18px;
    border-left: solid 3px gray;
    margin: 4px 0;
  `
}

export default Blockquote as Pretty as Typed<BlockquoteProps>
