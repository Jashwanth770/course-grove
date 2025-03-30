
export type CourseSection = {
  title: string;
  lectures: number;
  duration: string;
};

export type CourseType = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  instructor: string;
  rating: number;
  students: string;
  price: string;
  image: string;
  category: string;
  level: string;
  lastUpdated: string;
  language: string;
  totalHours: number;
  lectures: number;
  sections: CourseSection[];
  whatYouWillLearn: string[];
};
