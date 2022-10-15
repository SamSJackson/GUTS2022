interface Visit {
  start: string;
  end: string;
  location: number[];
  student_ID: string;
}

interface Lecture {
  name: string;
  start: string;
  end: string;
}

interface Building {
  name: string;
  geolocation: [number, number];
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
