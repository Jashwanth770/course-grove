
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, DollarSign } from "lucide-react";

const BecomeInstructorSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
              alt="Become an instructor"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Become an Instructor</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of educators and share your knowledge with students around the world. 
              Create engaging courses and build your online teaching business.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-6 w-6 text-education-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Teach Your Way</h3>
                  <p className="text-gray-600">
                    Create courses using your unique teaching style and expertise. Our platform 
                    provides tools to help you create engaging content.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Users className="h-6 w-6 text-education-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Reach Millions of Students</h3>
                  <p className="text-gray-600">
                    Access our global community of learners and help students achieve their goals 
                    while building your audience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <DollarSign className="h-6 w-6 text-education-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Earn Revenue</h3>
                  <p className="text-gray-600">
                    Get paid for your expertise. Earn revenue when students purchase your courses or 
                    through our subscription model.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-education-600 hover:bg-education-700 text-white font-medium px-6 py-3 rounded-md text-lg"
            >
              <span>Start Teaching Today</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructorSection;
