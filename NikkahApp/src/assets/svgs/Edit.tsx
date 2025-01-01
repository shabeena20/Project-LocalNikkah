import * as React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Edit = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
    <Path
      fill="#2C3639"
      d="m11.059 6.02.92.92L2.918 16h-.92v-.92l9.06-9.06Zm3.6-6.02c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41L15.369.29c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L-.002 14.25V18h3.75l11.06-11.06-3.75-3.75Z"
    />
  </Svg>
);

export default Edit;
