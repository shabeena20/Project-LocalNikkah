import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Email = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6Zm-2 0-8 5-8-5h16Zm0 12H4V8l8 5 8-5v10Z"
    />
  </Svg>
);

export default Email;
