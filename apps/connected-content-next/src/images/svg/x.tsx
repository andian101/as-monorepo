import * as React from "react";
type Props = { color: string; width?: number; height?: number };
const XIcon = ({ color, width = 30, height = 30 }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill={color}
    viewBox='0 0 25 25'
    width={width}
    height={height}
  >
    <path d='M 14.878906 10.605469 L 24.1875 0.0117188 L 21.984375 0.0117188 L 13.898438 9.207031 L 7.445312 0.0117188 L 0 0.0117188 L 9.761719 13.921875 L 0 25.03125 L 2.203125 25.03125 L 10.738281 15.316406 L 17.554688 25.03125 L 25 25.03125 M 3 1.640625 L 6.386719 1.640625 L 21.984375 23.484375 L 18.59375 23.484375 ' />
  </svg>
);
export default XIcon;
