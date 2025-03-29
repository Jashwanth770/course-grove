
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, BarChart, CheckCircle } from "lucide-react";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
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
      <main className="flex-grow">
        {/* Hero section */}
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
            </div>
          </div>
        </div>

        {/* Course content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="overview">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
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
            </TabsContent>
            
            <TabsContent value="curriculum">
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
            </TabsContent>
            
            <TabsContent value="instructor">
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
            </TabsContent>
            
            <TabsContent value="reviews">
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
