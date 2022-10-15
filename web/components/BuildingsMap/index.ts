import dynamic from "next/dynamic";

export default dynamic(
  () => import("./BuildingsMap"),
  { ssr: false } // This line is important. It's what prevents server-side render
);
