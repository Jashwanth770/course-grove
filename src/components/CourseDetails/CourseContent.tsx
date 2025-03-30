
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseOverview from "./CourseOverview";
import CourseCurriculum from "./CourseCurriculum";
import InstructorInfo from "./InstructorInfo";
import CourseReviews from "./CourseReviews";
import { CourseType } from "../../types/course";

type CourseContentProps = {
  course: CourseType;
};

const CourseContent = ({ course }: CourseContentProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <CourseOverview course={course} />
        </TabsContent>
        
        <TabsContent value="curriculum">
          <CourseCurriculum course={course} />
        </TabsContent>
        
        <TabsContent value="instructor">
          <InstructorInfo course={course} />
        </TabsContent>
        
        <TabsContent value="reviews">
          <CourseReviews course={course} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseContent;
