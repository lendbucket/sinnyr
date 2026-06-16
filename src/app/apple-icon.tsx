import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ED2100",
          borderRadius: "36px",
        }}
      >
        <svg
          width="120"
          height="140"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center prong */}
          <path
            d="M10.5 10L12 2L13.5 10"
            stroke="#FAF4E8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left prong */}
          <path
            d="M10.5 10L6 3.5L8.5 11"
            stroke="#FAF4E8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right prong */}
          <path
            d="M13.5 10L18 3.5L15.5 11"
            stroke="#FAF4E8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Handle */}
          <path
            d="M12 10L12 26"
            stroke="#FAF4E8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
