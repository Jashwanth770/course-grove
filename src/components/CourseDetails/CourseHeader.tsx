
import { Star, Clock, BarChart } from "lucide-react";
import { CourseType } from "../../types/course";

type CourseHeaderProps = {
  course: CourseType;
};

const CourseHeader = ({ course }: CourseHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-education-800 to-education-600 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg mb-4">{course.description}</p>
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
              <span className="font-medium mr-1">{course.rating}</span>
              <span className="text-sm text-gray-200">({course.students} students)</span>
            </div>
            <p className="mb-4">Created by <span className="font-medium">{course.instructor}</span></p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">Last updated {course.lastUpdated}</span>
              </div>
              <div className="flex items-center">
                <BarChart className="h-4 w-4 mr-1" />
                <span className="text-sm">{course.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
