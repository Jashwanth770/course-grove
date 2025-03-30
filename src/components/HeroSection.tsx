
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Learn without limits
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Start, switch, or advance your career with thousands of courses, 
              professional certificates, and degrees from world-class universities and companies.
            </p>
            
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-education-600 focus:border-education-600"
                placeholder="What do you want to learn?"
              />
              <Button 
                className="absolute right-2.5 bottom-2.5 bg-education-600 hover:bg-education-700"
              >
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm font-medium mr-2">Popular:</span>
              {["Web Development", "Python", "Data Science", "React", "JavaScript"].map((topic) => (
                <Button key={topic} variant="outline" size="sm" className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800">
                  {topic}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">New to CourseGrove?</h2>
              <p className="text-gray-600 mb-4">Join thousands of students learning on our platform</p>
              <Button className="w-full mb-3 bg-education-600 hover:bg-education-700">
                Sign up for free
              </Button>
              <p className="text-xs text-gray-500 text-center">
                By signing up, you agree to our Terms of Use and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
