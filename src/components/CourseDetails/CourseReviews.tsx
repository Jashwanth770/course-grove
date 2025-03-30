
import { Star } from "lucide-react";
import { CourseType } from "../../types/course";

type CourseReviewsProps = {
  course: CourseType;
};

const CourseReviews = ({ course }: CourseReviewsProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
      <div className="flex items-center mb-6">
        <div className="text-5xl font-bold mr-4">{course.rating}</div>
        <div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-300"}`} 
                fill="currentColor" 
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">Course Rating • {course.students} reviews</p>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-center text-gray-500">Reviews are only available to enrolled students</p>
      </div>
    </>
  );
};

export default CourseReviews;
