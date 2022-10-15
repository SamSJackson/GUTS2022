import load_people from "./load_people";
import slugify_person from "./slugify_person";

export default function (student_id: string): Person {
  let target = student_id.toLowerCase();

  let all_people = load_people();

  for (let p of all_people) {
    let slug = slugify_person(p);
    if (target === slug) return p;
  }
  return all_people[0];
}
