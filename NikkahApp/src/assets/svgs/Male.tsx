import React from "react";
import Svg, { Path } from "react-native-svg";

interface MaleProps {
  width?: number;
  height?: number;
}

const Male: React.FC<MaleProps> = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 80}
    height={props.height || 80}
    fill="none"
  >
    <Path
      fill="#2E6C6C"
      d="M43.274 0v9.012h21.342L48.774 24.854a30.437 30.437 0 0 0-18.198-6.005C13.689 18.849 0 32.538 0 49.424 0 66.311 13.69 80 30.576 80 47.462 80 61.15 66.31 61.15 49.424a30.438 30.438 0 0 0-6.005-18.198l15.842-15.842v21.342H80V0H43.274ZM30.576 69.93c-11.325 0-20.506-9.18-20.506-20.506 0-11.325 9.18-20.506 20.506-20.506 11.325 0 20.505 9.181 20.505 20.506 0 11.325-9.18 20.506-20.505 20.506Z"
    />
  </Svg>
);

export default Male;
