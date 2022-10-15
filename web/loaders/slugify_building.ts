export default function (input: Building): string {
  return input.name.toLowerCase().replaceAll(" ", "_");
}
