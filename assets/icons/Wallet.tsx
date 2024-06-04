import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Wallet = () =>  {
  return (
    <Svg
      width={96}
      height={96}
      viewBox="0 0 96 96"
      fill="none"
    >
      <Path
        d="M80 48V32.167H24a8.043 8.043 0 01-5.657-2.32A7.875 7.875 0 0116 24.25c0-4.354 3.6-7.917 8-7.917h48v15.834"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 24.25v47.5c0 4.354 3.6 7.917 8 7.917h56V63.833"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M72 48a8.043 8.043 0 00-5.657 2.319A7.876 7.876 0 0064 55.917c0 4.354 3.6 7.916 8 7.916h16V48H72z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Wallet
