
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-education-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 font-poppins">CourseGrove</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#courses" className="text-gray-600 hover:text-education-600 font-medium">Courses</a>
            <a href="#features" className="text-gray-600 hover:text-education-600 font-medium">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-education-600 font-medium">Testimonials</a>
            <Button variant="outline" className="border-education-500 text-education-600 hover:bg-education-50">Log In</Button>
            <Button className="bg-education-600 hover:bg-education-700">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-education-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 pb-5 border-t border-gray-200 animate-fade-in">
            <a href="#courses" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">Courses</a>
            <a href="#features" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">Features</a>
            <a href="#testimonials" className="block py-2 px-4 text-gray-600 hover:text-education-600 font-medium">Testimonials</a>
            <div className="px-4 pt-3 flex flex-col space-y-2">
              <Button variant="outline" className="border-education-500 text-education-600 hover:bg-education-50 w-full">Log In</Button>
              <Button className="bg-education-600 hover:bg-education-700 w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
