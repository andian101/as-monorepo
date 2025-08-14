import * as React from "react";
type Props = { color?: string; width?: number; height?: number };
const ShowHide = ({ width = 38, height = 38 }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 38 38'
    width={width}
    height={height}
  >
    <path
      d='M19 24.9979L10 15.9995L13.0014 13L19 18.9989L24.9986 13L28 15.9995L19 25V24.9979Z'
      fill='#002877'
    />
    <rect
      x='2'
      y='2'
      width='34'
      height='34'
      rx='17'
      stroke='#002877'
      strokeWidth='3'
    />
  </svg>
);
export default ShowHide;
