import React from "react";

const RectangleSvg = ({ className }) => {
  return (
    <svg
      width="178"
      height="178"
      viewBox="0 0 178 178"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 0H178V78C178 133.228 133.228 178 78 178H0V0Z"
        fill="#current"
      />
    </svg>
  );
};

export default RectangleSvg;
