
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Learn Without Limits
            </h1>
            <p className="text-xl text-gray-600 mb-8 md:pr-12">
              Access high-quality courses and lectures from top educators. Learn at your own pace, anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-education-600 hover:bg-education-700 text-white font-medium px-6 py-3 rounded-md text-lg">
                Browse Courses
              </Button>
              <Button variant="outline" className="border-education-500 text-education-600 hover:bg-education-50 font-medium px-6 py-3 rounded-md text-lg">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-education-100 flex items-center justify-center text-education-600 font-medium">4.9</div>
                <div className="flex space-x-1 ml-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">from 10K+ reviews</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Student learning online"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-education-600 flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3 text-white">
                    <p className="text-sm font-medium">Watch Demo</p>
                    <p className="text-xs opacity-75">See how CourseGrove works</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
