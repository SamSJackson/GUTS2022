import { readFileSync } from "fs";

export default function (student_id: string) {
  let data = readFileSync(`../personaldata/${student_id}.html`, "utf-8");
  return data;
}
