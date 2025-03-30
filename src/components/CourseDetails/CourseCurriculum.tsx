
import { CourseType } from "../../types/course";

type CourseCurriculumProps = {
  course: CourseType;
};

const CourseCurriculum = ({ course }: CourseCurriculumProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
      <div className="space-y-4">
        {course.sections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex justify-between bg-gray-50 p-4">
              <h3 className="font-medium">Section {index + 1}: {section.title}</h3>
              <div className="text-sm text-gray-500">
                {section.lectures} lectures • {section.duration}
              </div>
            </div>
            <div className="p-4 text-gray-600">
              <p>Content details here (locked until enrolled)</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseCurriculum;
