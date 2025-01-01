import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const PasswordLock = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#2C3639"
      d="M18 8.5h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2Zm-9-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9v-2Zm9 14H6v-10h12v10Zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z"
    />
  </Svg>
);

export default PasswordLock;
