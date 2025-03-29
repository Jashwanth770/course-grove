
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-education-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of students who are already advancing their careers with CourseGrove. 
            Get unlimited access to all courses for an affordable monthly subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-education-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-md text-lg"
            >
              Sign Up Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-education-700 font-medium px-6 py-3 rounded-md text-lg"
            >
              <span>View Plans</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. Start with a 7-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
