import * as React from "react";
import { Svg, Path, Rect, SvgProps } from "react-native-svg";

interface CustomSvgProps extends SvgProps {
  xmlns?: string;
}

const Google = (props: CustomSvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Rect width={24} height={24} fill="#fff" rx={12} />
    <Path
      fill="#EA4335"
      d="M12.16 7.093c1.502 0 2.516.65 3.093 1.191l2.258-2.204C16.125 4.791 14.321 4 12.161 4a7.994 7.994 0 0 0-7.148 4.409L7.6 10.418c.649-1.93 2.444-3.325 4.56-3.325Z"
    />
    <Path
      fill="#4285F4"
      d="M19.84 12.178c0-.658-.053-1.138-.169-1.636H12.16v2.969h4.409c-.09.738-.57 1.849-1.636 2.595l2.525 1.956c1.51-1.396 2.382-3.449 2.382-5.885Z"
    />
    <Path
      fill="#FBBC05"
      d="M7.609 13.582A4.925 4.925 0 0 1 7.342 12c0-.551.098-1.085.258-1.582l-2.587-2.01A8.007 8.007 0 0 0 4.16 12c0 1.289.311 2.507.853 3.59l2.596-2.008Z"
    />
    <Path
      fill="#34A853"
      d="M12.16 20c2.16 0 3.974-.711 5.298-1.938l-2.524-1.956c-.676.472-1.583.8-2.774.8-2.115 0-3.91-1.395-4.55-3.324l-2.588 2.009C6.338 18.204 9.032 20 12.16 20Z"
    />
  </Svg>
);

export default Google;
