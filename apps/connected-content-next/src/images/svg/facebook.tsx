import * as React from "react";
type Props = { color: string; width?: number; height?: number };
const FacebookIcon = ({ color, width = 30, height = 30 }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill={color}
    viewBox='0 0 18 18'
    width={width}
    height={height}
  >
    <path d='M18 9A9 9 0 1 0 0 9c0 4.492 3.291 8.216 7.594 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.601h-2.097v6.29C14.71 17.215 18 13.492 18 9z' />
  </svg>
);
export default FacebookIcon;
