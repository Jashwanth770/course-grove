
import { CourseType } from "../../types/course";

type InstructorInfoProps = {
  course: CourseType;
};

const InstructorInfo = ({ course }: InstructorInfoProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-300 flex-shrink-0"></div>
        <div>
          <h3 className="text-xl font-medium">{course.instructor}</h3>
          <p className="text-gray-500">Web Development Instructor & Software Engineer</p>
        </div>
      </div>
      <p className="mb-4">
        Sarah Johnson is a professional web developer with over 10 years of experience in the industry. 
        She has worked with startups, tech giants, and educational institutions to create robust web applications 
        and has taught over 500,000 students worldwide.
      </p>
    </>
  );
};

export default InstructorInfo;
