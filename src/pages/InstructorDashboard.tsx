
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Book, DollarSign, Users, BookOpen, Plus, Edit, Trash2, Video, File, ChevronDown, ChevronUp } from "lucide-react";

const InstructorDashboard = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Web Development: HTML, CSS & JavaScript",
      status: "Published",
      students: 15423,
      earnings: 12500,
      rating: 4.8,
      lastUpdated: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Advanced React and Redux",
      status: "Draft",
      students: 0,
      earnings: 0,
      rating: 0,
      lastUpdated: "1 day ago",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-gradient-to-r from-education-800 to-education-600 text-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold">Instructor Dashboard</h1>
            <p className="mt-2">Manage your courses and monitor your performance</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="p-3 bg-education-100 rounded-lg mr-4">
                  <Book className="h-6 w-6 text-education-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Courses</p>
                  <h3 className="text-2xl font-bold">{courses.length}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Earnings</p>
                  <h3 className="text-2xl font-bold">${courses.reduce((sum, course) => sum + course.earnings, 0).toLocaleString()}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="p-3 bg-amber-100 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <h3 className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.students, 0).toLocaleString()}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Your Courses</h2>
            <Button className="bg-education-600 hover:bg-education-700">
              <Plus className="h-4 w-4 mr-2" /> Create New Course
            </Button>
          </div>
          
          <Tabs defaultValue="courses">
            <TabsList className="mb-6">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courses.map((course) => (
                        <tr key={course.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img className="h-10 w-10 rounded object-cover" src={course.image} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{course.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              course.status === 'Published' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {course.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.students.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.rating > 0 ? course.rating : '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${course.earnings.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.lastUpdated}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="text-education-600 hover:text-education-700">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Course Builder</h3>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Course Title
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter course title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Course Description
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                        placeholder="Enter course description"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option>Programming</option>
                          <option>Data Science</option>
                          <option>Design</option>
                          <option>Business</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Level
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>All Levels</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Course Content
                      </label>
                      
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-2">
                        <div className="p-3 bg-white border border-gray-200 rounded-md">
                          <div 
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAccordion(0)}
                          >
                            <div className="flex items-center">
                              <BookOpen className="h-5 w-5 mr-2 text-gray-500" />
                              <div>
                                <input 
                                  type="text" 
                                  className="font-medium border-none p-0 focus:ring-0 text-gray-900 bg-transparent" 
                                  defaultValue="Section 1: Introduction" 
                                />
                              </div>
                            </div>
                            {activeAccordion === 0 ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          
                          {activeAccordion === 0 && (
                            <div className="pt-3 mt-3 border-t border-gray-200">
                              <div className="space-y-2">
                                <div className="flex items-center p-2 rounded hover:bg-gray-50">
                                  <Video className="h-4 w-4 mr-2 text-gray-500" />
                                  <input 
                                    type="text" 
                                    className="flex-grow text-sm border-none p-0 focus:ring-0 bg-transparent" 
                                    defaultValue="Welcome to the Course" 
                                  />
                                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                                <div className="flex items-center p-2 rounded hover:bg-gray-50">
                                  <File className="h-4 w-4 mr-2 text-gray-500" />
                                  <input 
                                    type="text" 
                                    className="flex-grow text-sm border-none p-0 focus:ring-0 bg-transparent" 
                                    defaultValue="Course Resources" 
                                  />
                                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="mt-2 flex space-x-2">
                                <Button variant="outline" size="sm" className="text-xs">
                                  <Plus className="h-3 w-3 mr-1" /> Add Lecture
                                </Button>
                                <Button variant="outline" size="sm" className="text-xs">
                                  <Plus className="h-3 w-3 mr-1" /> Add Resource
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex justify-center">
                          <Button variant="outline" size="sm" className="mt-2">
                            <Plus className="h-4 w-4 mr-1" /> Add Section
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline">Save as Draft</Button>
                      <Button className="bg-education-600 hover:bg-education-700">Publish Course</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Course Performance</h3>
                <p className="text-gray-500">Analytics dashboard will appear here with charts showing student engagement, completion rates, and revenue trends.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="earnings">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Revenue & Earnings</h3>
                <p className="text-gray-500">Earnings dashboard will appear here with payment history, revenue breakdown by course, and payout status.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Student Reviews</h3>
                <p className="text-gray-500">Review management dashboard will appear here with ratings and feedback for each course.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstructorDashboard;
