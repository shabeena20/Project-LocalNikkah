import React from "react";
import Svg, { Path } from "react-native-svg";

const Female = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 52}
    height={props.height || 80}
    fill="none"
    {...props}
  >
    <Path
      fill="#2E6C6C"
      d="M26 0C11.762 0 .219 11.543.219 25.781c0 12.636 9.096 23.128 21.093 25.335v7.634H9.595v9.375h11.719V80h9.375V68.125h11.718V58.75H30.688v-7.634c11.997-2.207 21.093-12.7 21.093-25.335C51.781 11.543 40.238 0 26 0Zm0 42.188c-9.046 0-16.406-7.361-16.406-16.407 0-9.045 7.36-16.406 16.406-16.406 9.045 0 16.406 7.36 16.406 16.406S35.046 42.188 26 42.188Z"
    />
  </Svg>
);

export default Female;
