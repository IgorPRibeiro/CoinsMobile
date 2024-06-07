import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Cart = () => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G
        clipPath="url(#clip0_0_1)"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M5.333 14.667a.667.667 0 100-1.334.667.667 0 000 1.334zM12.667 14.667a.667.667 0 100-1.334.667.667 0 000 1.334zM1.367 1.367H2.7l1.773 8.28A1.334 1.334 0 005.807 10.7h6.52a1.333 1.333 0 001.3-1.047l1.1-4.953H3.413" />
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Cart
