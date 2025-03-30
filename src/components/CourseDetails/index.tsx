
import CourseHeader from "./CourseHeader";
import EnrollmentCard from "./EnrollmentCard";
import CourseContent from "./CourseContent";
import { CourseType } from "../../types/course";

type CourseDetailsComponentProps = {
  course: CourseType;
  loading: boolean;
};

const CourseDetailsComponent = ({ course, loading }: CourseDetailsComponentProps) => {
  if (loading || !course) return null;

  return (
    <main className="flex-grow">
      <div className="bg-gradient-to-r from-education-800 to-education-600 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CourseHeader course={course} />
            </div>
            <EnrollmentCard course={course} />
          </div>
        </div>
      </div>
      <CourseContent course={course} />
    </main>
  );
};

export default CourseDetailsComponent;
