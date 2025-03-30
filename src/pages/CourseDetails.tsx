
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseDetailsComponent from "../components/CourseDetails";
import { CourseType } from "../types/course";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<CourseType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app this would fetch from an API
    // Mock data for demonstration
    const mockCourse = {
      id: courseId,
      title: "Complete Web Development Bootcamp",
      description: "Learn web development from scratch to advanced concepts. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js and more!",
      longDescription: "This comprehensive web development bootcamp takes you from absolute beginner to professional developer. You'll learn to build fully-fledged websites and web apps. By the end, you'll have the skills and confidence to put together any website you can imagine from scratch.",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: "15,423",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      category: "Programming",
      level: "Beginner",
      lastUpdated: "November 2023",
      language: "English",
      totalHours: 65,
      lectures: 124,
      sections: [
        {
          title: "Introduction to Web Development",
          lectures: 8,
          duration: "2.5 hours"
        },
        {
          title: "HTML Fundamentals",
          lectures: 12,
          duration: "4 hours"
        },
        {
          title: "CSS Styling",
          lectures: 15,
          duration: "6 hours"
        },
        {
          title: "JavaScript Basics",
          lectures: 18,
          duration: "8 hours"
        },
        {
          title: "Building Projects",
          lectures: 10,
          duration: "12 hours"
        }
      ],
      whatYouWillLearn: [
        "Build 16 web development projects from scratch",
        "Learn HTML5, CSS3, JavaScript, React, Node.js",
        "Create a full e-commerce site with shopping cart",
        "Deploy your applications with Heroku and Netlify",
        "Use Bootstrap, Material UI for responsive designs",
        "Implement authentication and authorization",
        "Learn database design with MongoDB and SQL"
      ]
    };
    
    setTimeout(() => {
      setCourse(mockCourse);
      setLoading(false);
    }, 500);
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-education-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600">Course not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CourseDetailsComponent course={course} loading={loading} />
      <Footer />
    </div>
  );
};

export default CourseDetails;
