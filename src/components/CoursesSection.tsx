
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import CategoryFilters from "./CategoryFilters";
import { useState } from "react";

const CoursesSection = () => {
  const [showFilters, setShowFilters] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development: HTML, CSS & JavaScript",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: "15,423",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      category: "Programming",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Data Science Fundamentals: Python & Statistics",
      instructor: "Michael Chen",
      rating: 4.7,
      students: "12,758",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      category: "Data Science",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Jessica Williams",
      rating: 4.9,
      students: "21,369",
      price: "$64.99",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      category: "Marketing",
      level: "All Levels",
    },
    {
      id: 4,
      title: "Advanced Machine Learning & AI Concepts",
      instructor: "David Kumar",
      rating: 4.6,
      students: "8,942",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      category: "Artificial Intelligence",
      level: "Advanced",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular courses and start your learning journey today
          </p>
          
          <div className="flex justify-center mt-6">
            <Button 
              variant="outline" 
              className="flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="mb-8">
            <CategoryFilters />
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">Showing 4 of 234 courses</div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-education-500">
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              students={course.students}
              price={course.price}
              image={course.image}
              category={course.category}
              level={course.level}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-education-500 text-education-600 hover:bg-education-50 font-medium px-6 py-3 rounded-md text-lg"
          >
            <span>View All Courses</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
