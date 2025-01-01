import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Logout = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FD5F59"
      d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4ZM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5Z"
    />
  </Svg>
);

export default Logout;
