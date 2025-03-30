
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { ArrowRight, SlidersHorizontal, Clock, Award } from "lucide-react";
import CategoryFilters from "./CategoryFilters";
import { useState } from "react";

const CoursesSection = () => {
  const [showFilters, setShowFilters] = useState(false);

  const courses = [
    {
      id: 1,
      title: "The Complete Web Development Bootcamp 2023",
      instructor: "Dr. Angela Yu",
      rating: 4.8,
      students: "215,423",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      category: "Web Development",
      level: "Beginner",
      duration: "52.5 hours",
      lessons: 157
    },
    {
      id: 2,
      title: "100 Days of Python: Complete Python Pro Bootcamp",
      instructor: "Jose Portilla",
      rating: 4.7,
      students: "312,758",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      category: "Python",
      level: "All Levels",
      duration: "60 hours",
      lessons: 100
    },
    {
      id: 3,
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      instructor: "Rob Percival",
      rating: 4.9,
      students: "321,369",
      price: "$84.99",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      category: "Marketing",
      level: "All Levels",
      duration: "24.5 hours",
      lessons: 98
    },
    {
      id: 4,
      title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
      instructor: "Kirill Eremenko",
      rating: 4.6,
      students: "198,942",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      category: "Data Science",
      level: "Intermediate",
      duration: "42 hours",
      lessons: 320
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Courses to get you started</h2>
          <p className="text-gray-600 mb-4">Our most popular courses for beginners</p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <Button 
              variant="outline" 
              className="bg-white border-gray-300 text-gray-800 font-medium rounded-full"
            >
              Most Popular
            </Button>
            <Button 
              variant="outline" 
              className="bg-white border-gray-300 text-gray-800 font-medium rounded-full"
            >
              New
            </Button>
            <Button 
              variant="outline" 
              className="bg-white border-gray-300 text-gray-800 font-medium rounded-full"
            >
              Trending
            </Button>
          </div>

          <div className="flex items-center justify-end mb-4">
            <Button 
              variant="outline" 
              className="flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? "Hide Filters" : "Filters"}
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <CategoryFilters />
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center text-sm">
                <Clock className="h-3 w-3 mr-1" />
                0-3 Hours
              </Button>
              <Button variant="outline" size="sm" className="flex items-center text-sm">
                <Award className="h-3 w-3 mr-1" />
                Beginner
              </Button>
              <Button variant="outline" size="sm" className="text-sm">English</Button>
              <Button variant="outline" size="sm" className="text-sm">Free</Button>
              <Button variant="outline" size="sm" className="text-sm">Paid</Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              students={course.students}
              price={course.price}
              image={course.image}
              category={course.category}
              level={course.level}
              duration={course.duration}
              lessons={course.lessons}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Button 
            variant="outline"
            className="flex items-center text-education-600 hover:bg-education-50"
          >
            <span>Explore more courses</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
