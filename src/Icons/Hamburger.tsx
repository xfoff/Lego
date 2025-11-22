import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { SvgP } from "../types"

const Hamburger = ({ svgWidth, svgHeight, color, ...props }: SvgP) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={svgWidth}
    height={svgHeight}
    viewBox="0 0 640 640"
    fill={color}
    {...props}>
    <Path d="M96 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
  </Svg>
)
export default Hamburger
