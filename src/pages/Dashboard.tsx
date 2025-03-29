
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, Clock, Award, BookOpen, BarChart2 } from "lucide-react";

const Dashboard = () => {
  const [myCourses, setMyCourses] = useState([
    {
      id: 1,
      title: "Introduction to Web Development: HTML, CSS & JavaScript",
      instructor: "Sarah Johnson",
      progress: 65,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      lastAccessed: "2 days ago",
      totalLectures: 45,
      completedLectures: 29,
    },
    {
      id: 2,
      title: "Data Science Fundamentals: Python & Statistics",
      instructor: "Michael Chen",
      progress: 22,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      lastAccessed: "1 week ago",
      totalLectures: 65,
      completedLectures: 14,
    },
    {
      id: 3,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Jessica Williams",
      progress: 8,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      lastAccessed: "2 weeks ago",
      totalLectures: 38,
      completedLectures: 3,
    },
  ]);

  const [wishlist, setWishlist] = useState([
    {
      id: 4,
      title: "Advanced Machine Learning & AI Concepts",
      instructor: "David Kumar",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      category: "Artificial Intelligence",
      rating: 4.6,
    },
  ]);

  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "JavaScript Basics",
      issueDate: "October 15, 2023",
      instructor: "Sarah Johnson",
    }
  ]);

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button className="flex items-center gap-2 bg-education-600 hover:bg-education-700">
            <Play className="h-4 w-4" /> Continue Learning
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-1">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-3">By {course.instructor}</p>
        
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>{course.progress}% complete</span>
            <span>{course.completedLectures}/{course.totalLectures} lectures</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-education-600 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center text-xs text-gray-500">
          <Clock className="h-3 w-3 mr-1" />
          <span>Last accessed {course.lastAccessed}</span>
        </div>
      </div>
    </div>
  );
  
  const WishlistCard = ({ course }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-1">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-3">By {course.instructor}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{course.price}</span>
          <Button size="sm" className="bg-education-600 hover:bg-education-700">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-gradient-to-r from-education-800 to-education-600 text-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold">Student Dashboard</h1>
            <p className="mt-2">Welcome back! Continue your learning journey.</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="p-3 bg-education-100 rounded-lg mr-4">
                  <BookOpen className="h-6 w-6 text-education-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Enrolled Courses</p>
                  <h3 className="text-2xl font-bold">{myCourses.length}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="p-3 bg-amber-100 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Certificates</p>
                  <h3 className="text-2xl font-bold">{certificates.length}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <BarChart2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Overall Progress</p>
                  <h3 className="text-2xl font-bold">42%</h3>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="courses">
            <TabsList className="mb-6">
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="account">Account Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="wishlist">
              <h2 className="text-xl font-bold mb-4">Your Wishlist</h2>
              {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map(course => (
                    <WishlistCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                  <Button className="bg-education-600 hover:bg-education-700">
                    Browse Courses
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="certificates">
              <h2 className="text-xl font-bold mb-4">Your Certificates</h2>
              {certificates.length > 0 ? (
                <div className="bg-white rounded-lg shadow p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-gray-200">
                        <th className="pb-3">Certificate</th>
                        <th className="pb-3">Issue Date</th>
                        <th className="pb-3">Instructor</th>
                        <th className="pb-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificates.map(cert => (
                        <tr key={cert.id} className="border-b border-gray-200">
                          <td className="py-4">{cert.title}</td>
                          <td className="py-4">{cert.issueDate}</td>
                          <td className="py-4">{cert.instructor}</td>
                          <td className="py-4">
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500">Complete courses to earn certificates</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="account">
              <h2 className="text-xl font-bold mb-4">Account Settings</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-4">Profile Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          defaultValue="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Bio</label>
                        <textarea 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          rows={3}
                          defaultValue="Learning enthusiast and web developer."
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Current Password</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">New Password</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
                        <input 
                          type="password" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button className="bg-education-600 hover:bg-education-700">
                    Save Changes
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
