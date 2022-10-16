export default function (input: Person): string {
  return input.student_id.toLowerCase().replaceAll(" ", "_");
}
