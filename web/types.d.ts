interface Visit {
  start: string;
  end: string;
  geo_loc: number[];
  student_ID: string;
}

interface Lecture {
  name: string;
  start: string;
  end: string;
}

interface Building {
  name: string;
  geo_loc: [number, number];
  opens: string;
  closes: string;
  lecture: Lecture;
  description: string;
}

interface Person {
  name: string;
  student_id: string;
  interview?: string;
  timeline: Visit[];
}
