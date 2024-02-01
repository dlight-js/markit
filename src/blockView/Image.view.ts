import { View } from "@dlightjs/dlight"
import { a, type ContentProp, div, img, type Pretty, type Typed, Content, Prop, required } from "@dlightjs/types"
import { css } from "@emotion/css"
import clsx from "clsx"

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
  alignment: "left" | "center" | "right" = this.props.alignment
  linkUrl = this.props.linkUrl

  margins = {
    left: "0px auto 0px 0px",
    center: "0px auto",
    right: "0px 0px 0px auto"
  }

  View() {
    div()
      .class(clsx(this.dlightMarkitImageDiv, "dlight-markit-image-div"))
    {
      if (this.linkUrl) {
        a()
          .href(this.linkUrl)
          .class(clsx(this.dlightMarkitImageA, "dlight-markit-image-a"))
        {
          img()
            .src(this.imageUrl)
            .alt(this.alt)
            .title(this.title)
            .class(clsx(this.dlightMarkitImage, "dlight-markit-image"))
        }
      } else {
        img()
          .src(this.imageUrl)
          .alt(this.alt)
          .title(this.title)
          .class(clsx(this.dlightMarkitImage, "dlight-markit-image"))
      }
    }
  }

  dlightMarkitImageDiv = css`
    margin: ${this.margins[this.alignment]};
    width: ${this.zoomSize};
    height: ${this.zoomSize};
  `

  dlightMarkitImage = css`
    width: 100%;
  `

  dlightMarkitImageA = css`
    display: block;
  `
}

export default Image as Pretty as Typed<ImageProps>
