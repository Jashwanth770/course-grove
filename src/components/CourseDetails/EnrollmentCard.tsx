
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";
import { CourseType } from "../../types/course";

type EnrollmentCardProps = {
  course: CourseType;
};

const EnrollmentCard = ({ course }: EnrollmentCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
      <div className="rounded-md overflow-hidden mb-4">
        <img src={course.image} alt={course.title} className="w-full object-cover h-48" />
      </div>
      <p className="text-3xl font-bold mb-4">{course.price}</p>
      <Button className="w-full mb-3 bg-education-600 hover:bg-education-700">Enroll Now</Button>
      <Button variant="outline" className="w-full mb-6 border-education-500 text-education-600 hover:bg-education-50">
        Add to Wishlist
      </Button>
      <div className="space-y-3 text-sm">
        <p className="flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          {course.totalHours} hours of video content
        </p>
        <p className="flex items-center">
          <CheckCircle className="h-4 w-4 mr-2" />
          {course.lectures} lectures
        </p>
        <p className="flex items-center">
          <CheckCircle className="h-4 w-4 mr-2" />
          Full lifetime access
        </p>
        <p className="flex items-center">
          <CheckCircle className="h-4 w-4 mr-2" />
          Access on mobile and TV
        </p>
        <p className="flex items-center">
          <CheckCircle className="h-4 w-4 mr-2" />
          Certificate of completion
        </p>
      </div>
    </div>
  );
};

export default EnrollmentCard;
