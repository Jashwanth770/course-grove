
import { CheckCircle } from "lucide-react";
import { CourseType } from "../../types/course";

type CourseOverviewProps = {
  course: CourseType;
};

const CourseOverview = ({ course }: CourseOverviewProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {course.whatYouWillLearn.map((item, index) => (
            <div key={index} className="flex">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-education-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Course description</h2>
        <p className="mb-4">
          {course.longDescription}
        </p>
      </div>
    </div>
  );
};

export default CourseOverview;
