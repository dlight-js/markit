import { View } from "@dlightjs/dlight"
import { a, type ContentProp, div, img, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import { css } from "@iandx/easy-css"

interface ImageProps {
  ast: ContentProp
  props: any
}
@View
class Image implements ImageProps {
  @Content ast = required

  @Prop props = required
  imageUrl = this.props.imageUrl
  alt = this.props.altContent
  title = this.props.title
  zoomSize = this.props.zoomSize
  alignment = this.props.alignment
  linkUrl = this.props.linkUrl

  margins = {
    left: "0px auto 0px 0px",
    center: "0px auto",
    right: "0px 0px 0px auto"
  }

  View() {
    div()
      .class(this.dlightMarkitImageDiv$(this.alignment))
    {
      if (this.linkUrl) {
        a()
          .href(this.linkUrl)
          .class(this.dlightMarkitImageA$)
        {
          img()
            .src(this.imageUrl)
            .alt(this.alt)
            .title(this.title)
            .class(this.dlightMarkitImage$)
        }
      } else {
        img()
          .src(this.imageUrl)
          .alt(this.alt)
          .title(this.title)
          .class(this.dlightMarkitImage$)
      }
    }
  }

  dlightMarkitImageDiv$ = (marginType: "left" | "center" | "right") => css`
    margin: ${this.margins[marginType]};
    width: ${this.zoomSize};
    height: ${this.zoomSize};
  `

  dlightMarkitImage$ = css`
    width: 100%;
  `

  dlightMarkitImageA$ = css``
}

export default Image as Pretty as Typed<ImageProps>
