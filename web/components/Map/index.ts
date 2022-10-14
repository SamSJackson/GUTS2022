import dynamic from "next/dynamic";

export default dynamic(
  () => import("./map"),
  { ssr: false } // This line is important. It's what prevents server-side render
);
